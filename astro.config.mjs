import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://shinjyuku.mn",
  integrations: [tailwind(), react()],
  image: {
    service: {
      type: "astro/assets",
    },
  },
});
