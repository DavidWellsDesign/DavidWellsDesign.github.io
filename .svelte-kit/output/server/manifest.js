export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.svg","images/1712855639565578.gif","images/68864_133688_orig.png","images/Screenshot 2024-10-07 at 13.15.15.png","images/Spr_ratblock4_0.gif","images/Spr_spacerat_0.png","images/Tribe_cheese_dance.gif","images/art-generator.png","images/rnPShvXUPmmNk45MBeRo8Ln8-2.pdf","images/sneaky-sprint.png","images/test_image_1.png","images/test_image_3.png","images/voyage.png"]),
	mimeTypes: {".svg":"image/svg+xml",".gif":"image/gif",".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.BraUDHHG.js",app:"_app/immutable/entry/app.BkUos3ZM.js",imports:["_app/immutable/entry/start.BraUDHHG.js","_app/immutable/chunks/CGc5kcgk.js","_app/immutable/chunks/3ZafP-BL.js","_app/immutable/chunks/B14bQUOj.js","_app/immutable/entry/app.BkUos3ZM.js","_app/immutable/chunks/CGc5kcgk.js","_app/immutable/chunks/c0Izo91z.js","_app/immutable/chunks/BUTFHoOH.js","_app/immutable/chunks/B14bQUOj.js","_app/immutable/chunks/unW97tRP.js","_app/immutable/chunks/CiSx8Nyh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
