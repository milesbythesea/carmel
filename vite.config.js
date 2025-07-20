import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/carmel/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
