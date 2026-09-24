import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// ----------------------------------------------------------------------------
// If you deploy to GitHub Pages as a PROJECT site (e.g.
// https://your-username.github.io/your-repo-name/), change the line below to:
//
//   base: "/your-repo-name/",
//
// Leave it as "/" for a custom domain or a "your-username.github.io" USER
// site (root deployment). See README.md → "Deploy to GitHub Pages".
// ----------------------------------------------------------------------------
export default defineConfig({
  plugins: [react()],
  base: "/Ayman-And-Farah-Wedding/",
});
