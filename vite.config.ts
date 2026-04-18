import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    // This tells TanStack/Vite NOT to build a server-side version
    ssr: false, 
  },
  build: {
    // This ensures all files go into /dist/ and not /dist/server/
    outDir: 'dist',
    ssr: false,
  }
});
