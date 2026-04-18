import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This ensures Vite builds a standard static 'dist' folder
  build: {
    outDir: 'dist',
  }
});
