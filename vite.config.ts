import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works both at a domain root and under a
  // GitHub Pages project path (e.g. /Portfolio/).
  base: "./",
  plugins: [react(), tailwindcss()],
});
