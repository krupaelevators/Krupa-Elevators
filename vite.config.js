import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: "/",
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    // Vendor chunks apply to the browser bundle only; the prerender (SSR) build
    // keeps react etc. external.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              "vendor-react": ["react", "react-dom", "react-router-dom"],
              "vendor-icons": ["lucide-react"],
            },
          },
        },
  },
  server: {
    port: 3000,
    open: false,
  },
}));
