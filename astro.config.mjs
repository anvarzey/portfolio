import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

import image from '@astrojs/image';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), astroI18next(), image()],
  output: "server",
  adapter: vercel({
    analytics: true
  })
});