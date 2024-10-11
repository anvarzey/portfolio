import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), astroI18next()],
  output: "static",
  adapter: vercel({
    // analytics: true
    webAnalytics: {
      enabled: true,
    }
  }),
  image: {
    domains: ['res.cloudinary.com']
    // service: sharpImageService()
    // service: {
    //   entrypoint: 'astro/assets/services/sharp',
    // },


  }
});