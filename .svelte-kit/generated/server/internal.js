
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\n\t\t<script>\n\t\t\t// Applies the saved theme before first paint so the page never flashes\n\t\t\t// the default accent. Kept in sync with src/lib/data/themes.js.\n\t\t\t(function () {\n\t\t\t\tvar themes = {\n\t\t\t\t\tocean: ['#3498db', '#8e44ad', '#35424a'],\n\t\t\t\t\tforest: ['#16a085', '#27ae60', '#1e3a34'],\n\t\t\t\t\tsunset: ['#e67e22', '#e74c3c', '#4a2c2a'],\n\t\t\t\t\trose: ['#e84393', '#6c5ce7', '#3a2e44'],\n\t\t\t\t\tslate: ['#4a5568', '#718096', '#1a202c']\n\t\t\t\t};\n\t\t\t\ttry {\n\t\t\t\t\tvar t = themes[localStorage.getItem('portfolio-theme')];\n\t\t\t\t\tif (!t) return;\n\t\t\t\t\tvar s = document.documentElement.style;\n\t\t\t\t\ts.setProperty('--accent', t[0]);\n\t\t\t\t\ts.setProperty('--accent-2', t[1]);\n\t\t\t\t\ts.setProperty('--dark', t[2]);\n\t\t\t\t} catch (e) {}\n\t\t\t})();\n\t\t</script>\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error
	},
	version_hash: "jzigrc"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
