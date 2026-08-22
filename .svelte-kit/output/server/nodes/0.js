import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CxJsJtol.js","_app/immutable/chunks/BUTFHoOH.js","_app/immutable/chunks/CGc5kcgk.js","_app/immutable/chunks/CiSx8Nyh.js"];
export const stylesheets = ["_app/immutable/assets/0.BCUOcjFd.css"];
export const fonts = [];
