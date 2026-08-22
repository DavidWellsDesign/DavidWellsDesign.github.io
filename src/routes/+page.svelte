<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { reveal, fillBar } from '$lib/actions/reveal.js';
	import { projects, categories } from '$lib/data/projects.js';
	import { jobs, education, skills, social } from '$lib/data/resume.js';

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
	<title>David Wells — Software Engineer</title>
	<meta
		name="description"
		content="Portfolio of David Wells, a software engineer working across case management systems, automation, tooling and games."
	/>
</svelte:head>

<div class="shell">
	<Sidebar />

	<main class="content">
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
				{#each skills as skill, i (skill.name)}
					<div class="skill" use:reveal={{ delay: i * 60 }}>
						<div class="skill-head">
							<span class="skill-name">{skill.name}</span>
							<span class="skill-value">{skill.level}%</span>
						</div>
						<div class="skill-track">
							<div class="skill-fill" use:fillBar={skill.level}></div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section id="contact" class="section">
			<h2 class="section-title">Contact</h2>

			<div class="contact" use:reveal>
				<p>Feel free to reach out, or take a look at more of my work.</p>
				<ul class="contact-links">
					{#each social as item (item.label)}
						<li><a href={item.url} target="_blank" rel="noopener">{item.label}</a></li>
					{/each}
				</ul>
			</div>

			<p class="colophon">© {new Date().getFullYear()} David Wells</p>
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
		color: var(--accent);
	}

	.pill.active {
		background: var(--accent);
		border-color: var(--accent);
		color: #fff;
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
		color: var(--accent);
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
		gap: 1.25rem 2rem;
	}

	.skill-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 0.35rem;
	}

	.skill-name {
		font-weight: 600;
		font-size: 0.92rem;
	}

	.skill-value {
		font-size: 0.78rem;
		color: var(--text-muted);
	}

	.skill-track {
		height: 8px;
		background: #e7eaec;
		border-radius: 999px;
		overflow: hidden;
	}

	.skill-fill {
		height: 100%;
		width: 0;
		background: var(--accent);
		border-radius: 999px;
		transition:
			width 1.1s ease,
			background 0.3s ease;
	}

	.contact p {
		margin: 0 0 1.25rem;
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
		color: var(--accent);
	}

	.colophon {
		margin-top: 3rem;
		font-size: 0.8rem;
		color: var(--text-muted);
	}
</style>
