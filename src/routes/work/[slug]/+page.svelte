<script>
	import { base } from '$app/paths';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { site } from '$lib/data/site.js';

	let { data } = $props();
	const study = $derived(data.study);

	// A section can carry one image (`image` / `imageAlt` / `caption`) or several
	// (`images: [{ src, alt, caption }]`). Both shapes end up as the same list.
	function figuresFor(section) {
		if (section.images?.length) return section.images;
		if (section.image) {
			return [{ src: section.image, alt: section.imageAlt, caption: section.caption }];
		}
		return [];
	}
</script>

<svelte:head>
	<title>{study.title} — {site.name}</title>
	{#if study.tagline}
		<meta name="description" content={study.tagline} />
	{/if}
</svelte:head>

<div class="shell">
	<Sidebar variant="detail" />

	<main class="content">
		{#if study.draft}
			<p class="draft-flag">
				Draft — this page is only visible in development and is left out of the build.
			</p>
		{/if}

		<a class="back" href="{base}/#work">← Back to work</a>

		<header class="head">
			<h1>{study.title}</h1>
			{#if study.tagline}
				<p class="tagline">{study.tagline}</p>
			{/if}
		</header>

		{#if study.meta?.length}
			<dl class="meta">
				{#each study.meta as item (item.label)}
					<div>
						<dt>{item.label}</dt>
						<dd>{item.value}</dd>
					</div>
				{/each}
			</dl>
		{/if}

		{#if study.hero}
			<img class="hero" src="{base}{study.hero}" alt={study.heroAlt ?? ''} />
		{/if}

		{#if study.intro?.length}
			<div class="intro" use:reveal>
				{#each study.intro as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</div>
		{/if}

		{#each study.sections ?? [] as section, i (section.heading ?? i)}
			<section class="chapter" use:reveal>
				{#if section.heading}
					<h2>{section.heading}</h2>
				{/if}

				{#each section.body ?? [] as paragraph}
					<p>{@html paragraph}</p>
				{/each}

				{#if section.list?.length}
					<ul>
						{#each section.list as item}
							<li>{@html item}</li>
						{/each}
					</ul>
				{/if}

				{#each figuresFor(section) as figure (figure.src)}
					<figure>
						<img src="{base}{figure.src}" alt={figure.alt ?? ''} loading="lazy" />
						{#if figure.caption}
							<figcaption>{figure.caption}</figcaption>
						{/if}
					</figure>
				{/each}
			</section>
		{/each}

		{#if study.links?.length}
			<div class="links" use:reveal>
				{#each study.links as link (link.url)}
					<a href={link.url} target="_blank" rel="noopener">{link.label}</a>
				{/each}
			</div>
		{/if}

		<a class="back bottom" href="{base}/#work">← Back to work</a>
	</main>
</div>

<ThemeSwitcher />

<style>
	.content {
		max-width: 760px;
	}

	.draft-flag {
		margin: 0 0 1.5rem;
		padding: 0.6rem 0.9rem;
		border: 1px dashed var(--accent);
		border-radius: 8px;
		font-size: 0.85rem;
		color: var(--accent);
	}

	.back {
		display: inline-block;
		font-size: 0.85rem;
		color: var(--text-muted);
		text-decoration: none;
	}

	.back:hover {
		color: var(--accent);
	}

	.back.bottom {
		margin-top: 3.5rem;
	}

	.head {
		margin: 1.5rem 0 0;
	}

	h1 {
		margin: 0;
		font-size: 2.4rem;
		letter-spacing: -0.02em;
	}

	.tagline {
		margin: 0.6rem 0 0;
		font-size: 1.1rem;
		color: var(--text-muted);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem 2.5rem;
		margin: 2rem 0 0;
		padding: 1.1rem 0;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.meta dt {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.meta dd {
		margin: 0.2rem 0 0;
		font-size: 0.92rem;
		font-weight: 600;
	}

	.hero {
		width: 100%;
		border-radius: 10px;
		margin-top: 2.5rem;
		border: 1px solid var(--border);
	}

	.intro {
		margin-top: 2.5rem;
		font-size: 1.05rem;
	}

	.chapter {
		margin-top: 3rem;
	}

	.chapter h2 {
		font-size: 1.35rem;
		margin: 0 0 0.75rem;
	}

	.chapter p,
	.intro p {
		margin: 0 0 1rem;
		line-height: 1.75;
	}

	.chapter ul {
		margin: 0 0 1rem;
		padding-left: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	figure {
		margin: 1.75rem 0 0;
	}

	figure img {
		width: 100%;
		border-radius: 10px;
		border: 1px solid var(--border);
		display: block;
	}

	figcaption {
		margin-top: 0.6rem;
		font-size: 0.82rem;
		color: var(--text-muted);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 3rem;
	}

	.links a {
		display: inline-block;
		padding: 0.55rem 1.35rem;
		border-radius: 999px;
		background: var(--accent);
		color: #fff;
		text-decoration: none;
		font-size: 0.9rem;
		transition: filter 0.2s ease;
	}

	.links a:hover {
		filter: brightness(0.9);
	}
</style>
