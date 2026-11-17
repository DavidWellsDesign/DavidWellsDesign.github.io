<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Featured from '$lib/components/Featured.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { featured } from '$lib/data/featured.js';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { projects, categories } from '$lib/data/projects.js';
	import { jobs, education, skills, social } from '$lib/data/resume.js';
	import { site } from '$lib/data/site.js';

	let selected = $state('All');

	// Only offer a filter for categories that actually have projects in them.
	const usedCategories = $derived([
		'All',
		...categories.filter((category) => projects.some((p) => p.category === category))
	]);

	const filtered = $derived(
		selected === 'All' ? projects : projects.filter((p) => p.category === selected)
	);
</script>

<svelte:head>
	<title>{site.name} — {site.role}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<div class="shell">
	<Sidebar />

	<main class="content">
		{#if featured}
			<section id={featured.id} class="section">
				<h2 class="section-title">Current project</h2>
				<Featured item={featured} />
			</section>
		{/if}

		<section id="work" class="section">
			<h2 class="section-title">Work</h2>

			{#if usedCategories.length > 2}
				<div class="filters" role="group" aria-label="Filter projects by category">
					{#each usedCategories as category (category)}
						<button
							class="pill"
							class:active={selected === category}
							aria-pressed={selected === category}
							onclick={() => (selected = category)}
						>
							{category}
						</button>
					{/each}
				</div>
			{/if}

			<div class="project-grid">
				{#each filtered as project (project.title)}
					<div use:reveal>
						<ProjectCard {project} />
					</div>
				{/each}
			</div>
		</section>

		<section id="experience" class="section">
			<h2 class="section-title">Experience</h2>

			<div class="timeline">
				{#each jobs as job, i (job.company + job.role)}
					<article class="entry" use:reveal={{ delay: i * 80 }}>
						<h3>{job.role}</h3>
						<p class="meta">
							<span class="company">{job.company}</span>
							<span class="date">{job.date}</span>
						</p>
						<ul>
							{#each job.points as point (point)}
								<li>{point}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</section>

		<section id="education" class="section">
			<h2 class="section-title">Education</h2>

			<div class="timeline">
				{#each education as item, i (item.qualification)}
					<article class="entry" use:reveal={{ delay: i * 80 }}>
						<h3>{item.qualification}</h3>
						<p class="meta">
							<span class="company">{item.institution}</span>
							<span class="date">{item.date}</span>
						</p>
					</article>
				{/each}
			</div>
		</section>

		<section id="skills" class="section">
			<h2 class="section-title">Skills</h2>

			<div class="skills-grid">
				{#each skills as group, i (group.group)}
					<div class="skill-group" use:reveal={{ delay: i * 70 }}>
						<h3>{group.group}</h3>
						<ul>
							{#each group.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<section id="contact" class="section">
			<h2 class="section-title">Contact</h2>

			<div class="contact" use:reveal>
				<p class="availability">Available for freelance work</p>
				<p>
					I take on web, desktop and game projects. Feel free to get in touch, or take a
					look at more of my work.
				</p>
				<ul class="contact-links">
					{#each social as item (item.label)}
						<li><a href={item.url} target="_blank" rel="noopener">{item.label}</a></li>
					{/each}
				</ul>
			</div>

			<p class="colophon">© {new Date().getFullYear()} {site.name}</p>
		</section>
	</main>
</div>

<ThemeSwitcher />

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.75rem;
	}

	.pill {
		font: inherit;
		font-size: 0.82rem;
		padding: 0.3rem 0.9rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-muted);
		cursor: pointer;
		transition:
			border-color 0.2s ease,
			color 0.2s ease,
			background 0.2s ease;
	}

	.pill:hover {
		border-color: var(--accent);
		color: var(--accent-ink);
	}

	.pill.active {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--on-accent);
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.timeline {
		border-left: 2px solid var(--border);
		padding-left: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 2.25rem;
	}

	.entry {
		position: relative;
	}

	.entry::before {
		content: '';
		position: absolute;
		left: calc(-1.75rem - 6px);
		top: 0.55rem;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--accent);
		transition: background 0.3s ease;
	}

	.entry h3 {
		margin: 0;
		font-size: 1.1rem;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 0.75rem;
		margin: 0.2rem 0 0.7rem;
		font-size: 0.9rem;
	}

	.company {
		font-weight: 600;
		color: var(--accent-ink);
	}

	.date {
		color: var(--text-muted);
		font-style: italic;
	}

	.entry ul {
		margin: 0;
		padding-left: 1.15rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-size: 0.95rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.75rem 2.5rem;
	}

	.skill-group h3 {
		margin: 0 0 0.7rem;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.skill-group ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.skill-group li {
		font-size: 0.85rem;
		padding: 0.3rem 0.8rem;
		border-radius: 999px;
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text);
	}

	.contact p {
		margin: 0 0 1.25rem;
	}

	.availability {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0 0 0.9rem;
		font-weight: 600;
		color: var(--accent-ink);
	}

	.availability::before {
		content: '';
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--accent);
	}

	.contact-links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.contact-links a {
		display: inline-block;
		padding: 0.5rem 1.25rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		text-decoration: none;
		color: var(--text);
		font-size: 0.9rem;
		transition:
			border-color 0.2s ease,
			color 0.2s ease;
	}

	.contact-links a:hover {
		border-color: var(--accent);
		color: var(--accent-ink);
	}

	.colophon {
		margin-top: 3rem;
		font-size: 0.8rem;
		color: var(--text-muted);
	}
</style>
