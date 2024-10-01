// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [tailwind()],
});
