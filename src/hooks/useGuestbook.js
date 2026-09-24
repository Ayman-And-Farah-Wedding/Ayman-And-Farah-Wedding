import { useEffect, useState } from "react";
import { firebaseConfig, guestbookEnabled } from "../config/firebase";

const COLLECTION = "guestbookMessages";
const NAME_MAX = 60;
const MESSAGE_MAX = 500;

// The Firebase SDK (~450KB) is only ever downloaded here, lazily, and only
// for visitors who reach the Guest Book with it configured — never as part
// of the app's initial bundle. Cached after first load so repeat calls
// (e.g. re-mounting the component) don't re-initialize the app.
let firebasePromise = null;
function loadFirestore() {
  if (!firebasePromise) {
    firebasePromise = Promise.all([import("firebase/app"), import("firebase/firestore")]).then(
      ([{ initializeApp }, firestore]) => {
        const app = initializeApp(firebaseConfig);
        const db = firestore.getFirestore(app);
        return { db, firestore };
      }
    );
  }
  return firebasePromise;
}

export function useGuestbook() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(guestbookEnabled);

  useEffect(() => {
    if (!guestbookEnabled) return undefined;
    let unsubscribe;
    let cancelled = false;

    loadFirestore().then(({ db, firestore }) => {
      if (cancelled) return;
      const q = firestore.query(
        firestore.collection(db, COLLECTION),
        firestore.orderBy("createdAt", "desc"),
        firestore.limit(60)
      );
      unsubscribe = firestore.onSnapshot(
        q,
        (snapshot) => {
          setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          setLoading(false);
        },
        () => setLoading(false)
      );
    });

    return () => {
      cancelled = true;
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // `honeypot` is a hidden field real guests never fill in — if it has a
  // value, the submission came from a bot and is silently dropped.
  const submitMessage = async ({ name, attending, message, honeypot }) => {
    if (!guestbookEnabled) throw new Error("Guest book is not configured");
    if (honeypot) return;

    const cleanName = name.trim().slice(0, NAME_MAX);
    const cleanMessage = message.trim().slice(0, MESSAGE_MAX);
    if (!cleanName || !cleanMessage) throw new Error("Please fill in your name and a message.");

    const { db, firestore } = await loadFirestore();
    await firestore.addDoc(firestore.collection(db, COLLECTION), {
      name: cleanName,
      attending: attending === "yes" || attending === "no" ? attending : "",
      message: cleanMessage,
      createdAt: firestore.serverTimestamp(),
    });
  };

  return { messages, loading, enabled: guestbookEnabled, submitMessage };
}
