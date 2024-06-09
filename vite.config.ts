import { defineConfig } from "vite";
import { resolve } from "path";

import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  base: "/whats-next",
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
});
