// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: "https://www.leoj.de/",
  build: {
    format: "file",
  },
  integrations: [tailwind(), sitemap()],
});