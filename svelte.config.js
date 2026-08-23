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
		},
		prerender: {
			handleUnseenRoutes: ({ routes, message }) => {
				// While every case study is still a draft, /work/[slug] produces no
				// pages. That's expected, not a build failure. Anything else that
				// can't be reached still fails the build.
				const unexpected = routes.filter((route) => route !== '/work/[slug]');
				if (unexpected.length) throw new Error(message);
			}
		}
	}
};

export default config;
