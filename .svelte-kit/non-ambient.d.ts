
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/favicon.svg" | "/images/1712855639565578.gif" | "/images/68864_133688_orig.png" | "/images/Screenshot 2024-10-07 at 13.15.15.png" | "/images/Spr_ratblock4_0.gif" | "/images/Spr_spacerat_0.png" | "/images/Tribe_cheese_dance.gif" | "/images/art-generator.png" | "/images/rnPShvXUPmmNk45MBeRo8Ln8-2.pdf" | "/images/sneaky-sprint.png" | "/images/test_image_1.png" | "/images/test_image_3.png" | "/images/voyage.png" | string & {};
	}
}