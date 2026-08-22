// Add a project by appending an object here — the grid and the category filter
// both build themselves from this array.
//
//   {
//     title: 'Project name',
//     category: 'Web',              // must match one of the categories below
//     description: 'One or two sentences.',
//     image: '/images/something.png',
//     tech: ['Tag', 'Tag'],
//     link: 'https://...',
//     linkLabel: 'View on GitHub'
//   }

export const projects = [
	{
		title: 'Voyage',
		category: 'Games',
		description: 'A 3D space exploration game developed in Unity.',
		image: '/images/voyage.png',
		tech: ['Unity', 'C#', '3D'],
		link: 'https://gamejolt.com/games/voyage/68864',
		linkLabel: 'View on GameJolt'
	},
	{
		title: 'Sneaky Sprint',
		category: 'Games',
		description: 'A fast-paced platformer game developed in Godot.',
		image: '/images/sneaky-sprint.png',
		tech: ['Godot', 'GDScript', '2D'],
		link: 'https://doctorturnip.itch.io/sneaky-sprint',
		linkLabel: 'View on itch.io'
	},
	{
		title: 'Python Art Generator',
		category: 'Tools',
		description: 'A Python script that generates art using configurable parameters.',
		image: '/images/art-generator.png',
		tech: ['Python', 'Generative'],
		link: 'https://github.com/DavidWellsDesign/ArtGenerator',
		linkLabel: 'View on GitHub'
	}
];

// Order controls how the filter pills are laid out. A category with no projects
// is hidden automatically, so you can list ones you plan to fill in later.
export const categories = ['Games', 'Tools', 'Web', 'Data'];
