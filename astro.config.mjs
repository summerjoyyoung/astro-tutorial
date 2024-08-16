import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://glowing-hummingbird-ebaf90.netlify.app",
  integrations: [preact()]
});