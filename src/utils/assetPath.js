// Resolves a path inside /public so it works both in local dev (base "/")
// and when deployed to a GitHub Pages project subpath (e.g. "/my-repo/").
// Always pass paths WITHOUT a leading slash, e.g. assetPath("images/foo.jpg").
export function assetPath(path) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\/+/, "");
  return `${base}${clean}`;
}

// wedding.js's `gallery` array holds bare filenames (so the content guide
// can tell people to just drop files in and list the name) — this turns
// one of those filenames into the actual path inside public/images/gallery/.
export function galleryPhotoPath(filename) {
  return `images/gallery/${String(filename).replace(/^\/+/, "")}`;
}
