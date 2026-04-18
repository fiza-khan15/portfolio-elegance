import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    // Standard dev server settings
  },
  build: {
    outDir: 'dist',
    ssr: false, // CRITICAL: This stops the creation of the 'server' folder
  },
  // If your config allows passing an object to defineConfig:
  vite: {
    build: {
      outDir: 'dist',
      ssr: false,
    }
  }
});
