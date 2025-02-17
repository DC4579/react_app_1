import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig
(
  {
  base: "/react_app_1/",  // 👈 Fix for GitHub Pages
  plugins: [react()],
}
);
