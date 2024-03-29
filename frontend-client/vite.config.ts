import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      //modify the manifest options below
      manifest: {
        theme_color: "#f69435",
        background_color: "#f69435",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "Sneakers Station Record",
        short_name: "SSR",
        description: "ssr_application",
        icons: [
          {
            src: "/ssr-logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/ssr-logo.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/ssr-logo.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/ssr-logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
