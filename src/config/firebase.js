// ============================================================================
// GUEST BOOK — FIREBASE SETUP
// ----------------------------------------------------------------------------
// Paste your Firebase project's config values below to turn on the native
// Guest Book (no Google Forms). Exact click-by-click steps to get these
// values for free are in WEDDING-CONTENT-GUIDE.md -> "Guest Book setup".
// Leave everything empty ("") to hide the Guest Book until it's configured.
//
// This file intentionally does NOT import the Firebase SDK itself — the SDK
// (~450KB) is only downloaded lazily, inside useGuestbook.js, and only for
// visitors who actually reach the Guest Book section. Every other visitor
// never pays for it.
// ============================================================================

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export const guestbookEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
