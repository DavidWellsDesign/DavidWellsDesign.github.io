<script>
	import { base } from '$app/paths';
	import { hasPublishedCaseStudy, hasDraftCaseStudy } from '$lib/data/case-studies/index.js';
	import ProjectCover from './ProjectCover.svelte';

	let { project } = $props();

	const published = $derived(hasPublishedCaseStudy(project.slug));
	const draft = $derived(hasDraftCaseStudy(project.slug));

	// A card shows a case study link when one is live, or when it's still a
	// draft and we're running `npm run dev`.
	const study = $derived(published || draft);
	const studyHref = $derived(`${base}/work/${project.slug}/`);
</script>

<article class="card">
	<a
		class="thumb"
		href={study ? studyHref : project.link}
		target={study ? null : '_blank'}
		rel={study ? null : 'noopener'}
		tabindex="-1"
		aria-hidden="true"
	>
		{#if project.image}
			<img src="{base}{project.image}" alt="" loading="lazy" />
		{:else}
			<ProjectCover title={project.title} category={project.category} />
		{/if}
		<span class="category">{project.category}</span>
		{#if draft}
			<span class="draft">Draft</span>
		{/if}
	</a>

	<div class="body">
		<h3>{project.title}</h3>
		<p class="description">{project.description}</p>

		<ul class="tech">
			{#each project.tech as tag (tag)}
				<li>{tag}</li>
			{/each}
		</ul>

		<div class="actions">
			{#if study}
				<a class="link" href={studyHref}>
					Read case study
					<span aria-hidden="true">→</span>
				</a>
			{/if}

			<a class="link" href={project.link} target="_blank" rel="noopener">
				{project.linkLabel}
				<span aria-hidden="true">↗</span>
			</a>
		</div>
	</div>
</article>

<style>
	.card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.card:hover {
		transform: translateY(-4px);
		border-color: var(--accent);
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
	}

	.thumb {
		position: relative;
		display: block;
		line-height: 0;
	}

	.thumb img,
	.thumb :global(.cover) {
		width: 100%;
		height: 170px;
		object-fit: cover;
	}

	.category {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		background: rgba(255, 255, 255, 0.92);
		color: var(--dark);
		font-size: 0.7rem;
		line-height: 1.5;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
	}

	.body {
		padding: 1.15rem 1.25rem 1.35rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	h3 {
		margin: 0 0 0.4rem;
		font-size: 1.15rem;
	}

	.description {
		margin: 0;
		font-size: 0.92rem;
		color: var(--text);
	}

	.tech {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 0.9rem 0 0;
		padding: 0;
	}

	.tech li {
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		color: var(--text-muted);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 0.15rem 0.55rem;
	}

	.actions {
		margin-top: 1.1rem;
		padding-top: 0.9rem;
		border-top: 1px solid var(--border);
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.35rem 1.25rem;
	}

	.link {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--accent);
		text-decoration: none;
	}

	.link span {
		display: inline-block;
		transition: transform 0.2s ease;
	}

	.link:hover span {
		transform: translateX(3px);
	}

	.draft {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		background: var(--dark);
		color: #fff;
		font-size: 0.68rem;
		line-height: 1.5;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
	}
</style>
