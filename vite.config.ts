import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.svg"],
      manifest: {
        name: "Robosch",
        short_name: "Robosch",
        description: "Robosch chatbot",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "logo.svg",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
});
