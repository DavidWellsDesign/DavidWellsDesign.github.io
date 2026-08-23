// ─────────────────────────────────────────────────────────────────────────
// CASE STUDY
//
// To add another: copy this file, rename it, change the `slug` to match a
// project's `slug` in src/lib/data/projects.js, then register it in
// src/lib/data/case-studies/index.js.
//
// While this sits in the `drafts` array in index.js the card keeps its normal
// external link and this page is left out of the build — but you can still
// preview it in `npm run dev` at http://localhost:5173/work/voyage/. Move it
// to `published` when you're happy.
//
// Every field below is optional except `slug` and `title`. Delete anything
// you don't want and it simply won't render.
// ─────────────────────────────────────────────────────────────────────────

export default {
	slug: 'voyage',
	draft: true,

	title: 'Voyage',
	tagline: 'A 3D space exploration game developed for my university final year project.',

	hero: '/images/voyage.jpg',
	heroAlt: 'Voyage title screen',

	// Short facts shown as a row under the title. Add or remove freely.
	meta: [
		{ label: 'Role', value: 'Solo developer' },
		{ label: 'Timeline', value: '3 months, 2016' },
		{ label: 'Tools', value: 'Unity, C#, Blender' }
	],

	// A paragraph or two of scene-setting before the first heading.
	intro: [
		'Voyage is a physics-based exploration game where you fly a small craft through open space, using tractor beams to push and pull the objects around you. It was my final year project at Bournemouth University, built solo in Unity, and released as a free playable demo on GameJolt.',
		'The design work was driven almost entirely by putting the game in front of people and watching where they got stuck — which changed a lot more of it than I expected.'
	],

	sections: [
		{
			heading: 'The idea',
			body: [
				"Inspired by <strong>No Man's Sky</strong> and <strong>Outer Wilds</strong>, I wanted to capture the feeling of exploring space.",
				'The goal was something with broad appeal — easy to pick up and play, but with enough challenge to hold the attention of more dedicated players. Visually I leaned on simple shapes, bold colour and strong lighting, which kept the art achievable for one person while still giving the game a recognisable look.',
				'I also made a deliberate decision about <em>how</em> it should hold your attention. A lot of games lean on Skinner-box reward loops, where you get rewarded at semi-random intervals for repeating a menial task until the habit sticks. Instead, I wanted to reward exploration, making a game that you play just to enjoy floating around in space.'
			],
			images: [
				{
					src: '/images/voyage-space.jpg',
					alt: 'A yellow sun, drifting asteroids and a ringed planet rendered in flat low-poly shapes',
					caption:
						'The simple shapes and lack of textures were partly due to my lack of experience in Blender - but this ended up creating a unique style that I stuck with.'
				},
				{
					src: '/images/voyage-features.jpg',
					alt: 'Voyage promotional sheet showing gameplay features',
					caption: 'The feature sheet I put together for the GameJolt release.'
				}
			]
		},
		{
			heading: 'Making it feel good to fly',
			body: [
				'Almost all of the enjoyment in Voyage comes from the control scheme, so it had to feel good before anything else mattered. That turned out to be the hardest part to get right.',
				'The first problem was sheer volume: between flying, pushing, pulling and everything else, there were <strong>eleven distinct actions</strong> the player could perform. Testers struggled to get to grips with it. I added controller support, along with instructions and an in-game hint system, which took a lot of the pressure off learning it all at once.',
				'The second problem was subtler. Playtesters liked how the game controlled but described the motion as too rigid. I had been driving rotation and spin at a fixed speed, so every input snapped. Changing them to accelerate and decelerate instead made the ship feel considerably better to handle — enough that players started enjoying simply messing about with the physics between objectives, which was the point.'
			],
			images: [
				{
					src: '/images/voyage-controls-keyboard.jpg',
					alt: 'Keyboard control diagram for Voyage, mapping roll, movement, beams and projectiles',
					caption:
						'The keyboard sheet — laying it out like this is what made the scale of the problem obvious.'
				},
				{
					src: '/images/voyage-controls-gamepad.jpg',
					alt: 'Gamepad diagram mapping tractor beams to the triggers, plus roll, brake and boost',
					caption:
						'Adding a gamepad layout made everything easier: pushing and pulling map naturally onto the two triggers.'
				}
			]
		},
		{
			heading: 'What playtesting changed',
			body: [
				'I gathered feedback informally throughout — showing the game to people whenever I got the chance and asking what they liked and what they wanted improved. Four themes came back repeatedly, and each one led to a concrete change:'
			],
			list: [
				'<strong>Graphics</strong> — the colour and lighting landed well, but objects were visually inconsistent with each other. I cut the palette down so each object used only one or two colours plus a grey.',
				'<strong>Gameplay</strong> — people enjoyed moving objects with the beams, but there was nothing pulling them onward, and it was hard to recover if you built up too much speed. I added four collectibles to return to the ship, a basic hint system, and a way to slow down rapidly.',
				'<strong>Sound</strong> — the ambient audio around planets worked well and actively encouraged exploring, but the game was too quiet overall and the beam sound never changed. I sourced more effects, including for the beams and item collection.',
				'<strong>Interface and accessibility</strong> — see above; eleven actions was too many to absorb unaided, so controller support, instructions and hints all came out of this.'
			],
			image: '/images/voyage-beams.jpg',
			imageAlt:
				'In-game view with tractor beams pulling a green crystal, and an on-screen prompt reading "collect to restore energy"',
			caption:
				'Two of those fixes in one frame: the prompt telling you what the crystals are for, and the energy readout they feed.'
		},
		{
			heading: 'Teaching without telling',
			body: [
				'My original plan was to drop the player into the world with minimal prompting and let them discover things for themselves. Testing showed that even players who knew the controls often had no idea what they were <em>for</em> — particularly people who did not play games regularly. They were not my target audience, but I wanted the game to be as inclusive as I could reasonably make it.',
				'Rather than adding more text, I tried to lead players with visual cues. The clearest example: you arrive in an area and see a glowing fuel cell floating among some asteroids, and further off in the distance, a structure with the same glow. The link is obvious without anyone explaining it, and almost every tester tried to move the cell towards the structure unprompted. A fuel cell already sitting in one slot, with an empty slot beside it, does the rest of the explaining. Complete it and the station fires a laser that opens up a new area.',
				'I also gated the world at the start rather than opening it all at once. I took that from <strong>The Legend of Zelda: The Wind Waker</strong>, which restricts you to a handful of islands for the first few hours before handing over the whole sea, so you are fully comfortable with the controls before you are trusted to wander.'
			],
			image: '/images/voyage-slots.jpg',
			imageAlt:
				'Two glowing green rings side by side, one empty and one with a structure docked inside it',
			caption:
				'One slot already filled, one conspicuously empty, and a matching glow on both. Nobody needed telling what to do here.'
		},
		{
			heading: 'What I cut, and why',
			body: [
				'The most ambitious idea in my original proposal was a customisable moon base — a hub area where you could construct buildings like research labs and greenhouses, each unlocking something, in the spirit of <strong>Animal Crossing</strong>. It was meant to be the thing that brought players back after the first session.',
				'I badly underestimated how long it would take. Rather than let it swallow the project, I cut it back to a static level and put my remaining time into finishing the areas that already worked. It stayed in the design as a stretch goal, and testers responded well to the idea when I described it, which was some consolation.',
				'I made a similar call on the world itself, scaling back from open-world to a series of discrete levels. Open-world was simply over-ambitious for the timescale — and separate areas turned out to have a real upside, letting each one carry a distinct theme and its own gameplay ideas, including the Time Trial.'
			],
			image: '/images/voyage-lava.jpg',
			imageAlt: 'A large black asteroid split by glowing orange molten cracks',
			caption:
				'The upside of discrete areas: each one could commit to its own look instead of blending into one continuous world.'
		},
		{
			heading: 'What I would do differently',
			body: [
				'I am happy with how broad the appeal ended up being — you can play at your own pace and feel rewarded for exploring and for just playing with the physics.',
				'The main thing I would change is the educational angle. I had always intended to lean into it more, but as the game took shape it became progressively harder to fit in, and it ended up squeezed out entirely. Given the subject matter there was an obvious opportunity there that I did not take.',
				'The pleasing footnote is that real tractor beams have since gone into development, so it is not entirely fictional any more.'
			]
		}
	],

	// Buttons at the foot of the page.
	links: [{ label: 'Play on GameJolt', url: 'https://gamejolt.com/games/voyage/68864' }]
};
