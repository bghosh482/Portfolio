import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./",
  root: "client", // ✅ Very important!
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src")
    },
  },
  build: {
    outDir: "../dist", // ⬅ dist outside of client for Netlify
    emptyOutDir: true,
  },
});
