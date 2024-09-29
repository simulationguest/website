import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex({extension: ".md"}), vitePreprocess()],
	extensions: [".svelte", ".md"],
	kit: {
		adapter: adapter()
	}
};

export default config;
