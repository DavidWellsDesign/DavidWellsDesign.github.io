// The featured product section that sits above the Work grid. Set `featured`
// to null to remove the section entirely — the page and the sidebar nav both
// check for it before rendering.

export const featured = {
	// Must match the nav entry id in src/lib/components/Sidebar.svelte
	id: 'throughline',

	name: 'Throughline',
	tagline: 'Desktop tools for designing the shape of a game',

	body: [
		'Two native macOS apps for the parts of game design that usually live in a spreadsheet until they break. I design and build both of them myself.',
		'Project files are plain, diffable JSON that sit next to your engine project. There is no account and nothing phoning home — the apps open and save files on your own disk, and work offline.'
	],

	// Be accurate here: the apps are not downloadable yet.
	status:
		'Both apps are at v0.1 and in active development. Pre-orders are open now, with delivery estimated Q1 2027 — macOS first, Windows to follow.',

	apps: [
		{
			name: 'Progression',
			blurb:
				'Every chapter, area and beat becomes a node in a branching graph. A timeline reads one path through it and flags where the pacing sags — introduction gaps, reward droughts, difficulty spikes.',
			image: '/images/throughline-progression.jpg',
			alt: 'Throughline Progression showing a branching stage graph, a details panel and a pacing timeline flagging four issues'
		},
		{
			name: 'Balance',
			blurb:
				'Write a stat as a formula and the parameters inside it become sliders automatically. Drag one and the XP or damage curve redraws while you watch.',
			image: '/images/throughline-balance.jpg',
			alt: 'Throughline Balance showing an XP curve plotted over sixty levels with its formula parameters exposed as sliders'
		}
	],

	link: 'https://throughlinetools.com/',
	linkLabel: 'Visit throughlinetools.com'
};
