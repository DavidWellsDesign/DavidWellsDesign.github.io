// Add a project by appending an object here — the grid and the category filter
// both build themselves from this array.
//
//   {
//     title: 'Project name',
//     slug: 'project-name',         // optional — only needed for a case study
//     category: 'Web',              // must match one of the categories below
//     description: 'One or two sentences.',
//     image: '/images/something.png',  // optional — omit it and a cover is generated
//     tech: ['Tag', 'Tag'],
//     link: 'https://...',
//     linkLabel: 'View on GitHub'
//   }
//
// If a published case study exists with a matching `slug` (see
// src/lib/data/case-studies/), the card links to that page instead of
// straight out to the external link.

export const projects = [
	{
		title: 'Voyage',
		slug: 'voyage',
		category: 'Games',
		description: 'A 3D space exploration game developed in Unity.',
		image: '/images/voyage.jpg',
		tech: ['Unity', 'C#', '3D'],
		link: 'https://gamejolt.com/games/voyage/68864',
		linkLabel: 'View on GameJolt'
	},
	{
		title: 'Sneaky Sprint',
		slug: 'sneaky-sprint',
		category: 'Games',
		description: 'A fast-paced platformer game developed in Godot.',
		image: '/images/sneaky-sprint.png',
		tech: ['Godot', 'GDScript', '2D'],
		link: 'https://doctorturnip.itch.io/sneaky-sprint',
		linkLabel: 'View on itch.io'
	},
	{
		title: 'Python Art Generator',
		slug: 'python-art-generator',
		category: 'Tools',
		description: 'A Python script that generates art using configurable parameters.',
		image: '/images/art-generator.png',
		tech: ['Python', 'Generative'],
		link: 'https://github.com/DavidWellsDesign/ArtGenerator',
		linkLabel: 'View on GitHub'
	},
	{
		title: 'Edenbridge Village Hall website',
		slug: 'edenbridge-hall',
		category: 'Web',
		description: 'A website I developed to promote a local village hall for hire.',
		tech: ['Wordpress', 'Web'],
		link: 'https://edenbridgevillagehall.org/',
		linkLabel: 'View the site'
	},
	{
		title: 'Destination: Earth',
		slug: 'destination-earth',
		category: 'Games',
		description: 'A puzzle platformer game developed for the Game Makers Toolkit game jam 2026.',
		image: '/images/Destination_Earth_Cover.jpg',
		tech: ['Godot', 'GDScript', '2D'],
		link: 'https://doctorturnip.itch.io/destination-earth',
		linkLabel: 'View on itch.io'
	}
];

// Order controls how the filter pills are laid out. A category with no projects
// is hidden automatically, so you can list ones you plan to fill in later.
export const categories = ['Games', 'Tools', 'Web', 'Data'];
