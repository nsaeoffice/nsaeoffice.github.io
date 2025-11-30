// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://nsae-nepal.github.io",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  redirects: {
    "/blog": "/blog/page/1",
    "/notices": "/notices/page/1",
    "/careers": "/careers/page/1",
    "/past-committee": "/past-committee/page/1",
    "/resources": "/resources/page/1",
    "/minutes": "/minutes/page/1",
    "/events": "/events/page/1",
  },
});
