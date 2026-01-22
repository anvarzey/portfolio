import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), astroI18next()],
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en'
	},
	output: "static",
	adapter: vercel({
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
	},
	vite: {
		plugins: [tailwindcss()]
	}
});
