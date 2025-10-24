import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: true, // allow access via IP or custom domain
    allowedHosts: true, // 👈 add this line
    port: 5173,
  },
  resolve: {
    alias: {
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },  
  css: {
    postcss: path.resolve(__dirname, "./postcss.config.mjs"),
  },
});
