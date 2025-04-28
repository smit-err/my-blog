// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "blog-site-atw.pages.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: {
      theme: "light-plus",
    },
  },
});
