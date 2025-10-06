import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setupTest.ts"],
    globals: true,
  },
  server: {
    host: "0.0.0.0",
    port: 4173,
    watch: {
      usePolling: true,
    },
  },
});
