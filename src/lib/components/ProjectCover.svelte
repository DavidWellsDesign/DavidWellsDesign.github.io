<script>
	// A generated cover for projects with no screenshot to show — used
	// automatically by ProjectCard when a project has no `image`. Colour comes
	// from the live theme, so it repaints with the theme switcher for free.
	// The background shapes and monogram are seeded from the title, so the
	// same project always renders the same cover, and different projects
	// don't look identical.
	let { title = '', category = '' } = $props();

	function hash(str) {
		let h = 0;
		for (let i = 0; i < str.length; i++) {
			h = (h << 5) - h + str.charCodeAt(i);
			h |= 0;
		}
		return Math.abs(h);
	}

	const seed = $derived(hash(title || category || 'cover'));
	const gradId = $derived(`cover-grad-${seed}`);

	const monogram = $derived(
		(title || '?')
			.split(' ')
			.filter(Boolean)
			.slice(0, 2)
			.map((word) => word[0])
			.join('')
			.toUpperCase()
	);

	const shapes = $derived(
		Array.from({ length: 4 }, (_, i) => {
			const n = seed + i * 97;
			return {
				cx: 40 + (n % 340),
				cy: 20 + ((n >> 3) % 130),
				r: 30 + ((n >> 6) % 55),
				opacity: 0.05 + ((n >> 2) % 7) / 100
			};
		})
	);

	// Keeps long titles from overflowing the fixed viewBox.
	const titleSize = $derived(
		Math.max(15, Math.min(26, 350 / (Math.max(title.length, 1) * 0.55)))
	);
</script>

<svg
	class="cover"
	viewBox="0 0 400 170"
	preserveAspectRatio="xMidYMid slice"
	role="img"
	aria-label="{title} cover"
>
	<defs>
		<linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" style="stop-color: var(--accent)" />
			<stop offset="100%" style="stop-color: var(--accent-2)" />
		</linearGradient>
	</defs>

	<rect width="400" height="170" fill="url(#{gradId})" />

	{#each shapes as shape, i (i)}
		<circle cx={shape.cx} cy={shape.cy} r={shape.r} fill="#fff" opacity={shape.opacity} />
	{/each}

	<text x="378" y="150" text-anchor="end" class="monogram">{monogram}</text>
	<text x="24" y="128" class="title" style="font-size: {titleSize}px">{title}</text>
</svg>

<style>
	.cover {
		display: block;
		width: 100%;
		height: 100%;
	}

	.monogram {
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			Arial,
			sans-serif;
		font-size: 108px;
		font-weight: 700;
		fill: #fff;
		opacity: 0.16;
	}

	.title {
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			Arial,
			sans-serif;
		font-weight: 700;
		fill: #fff;
	}
</style>
