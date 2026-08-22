import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		}),
		// This repo is a GitHub *user* site (DavidWellsDesign.github.io), served from
		// the domain root, so base stays empty. Only project sites served from
		// username.github.io/repo-name need a base path here.
		paths: {
			base: ''
		}
	}
};

export default config;
