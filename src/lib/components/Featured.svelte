<script>
	import { base } from '$app/paths';
	import { reveal } from '$lib/actions/reveal.js';

	let { item } = $props();
</script>

<div class="panel" use:reveal>
	<div class="head">
		<h3>{item.name}</h3>
		<p class="tagline">{item.tagline}</p>

		{#each item.body as paragraph}
			<p class="body">{paragraph}</p>
		{/each}

		{#if item.status}
			<p class="status">{item.status}</p>
		{/if}
	</div>

	<div class="apps">
		{#each item.apps as app (app.name)}
			<article class="app">
				<img src="{base}{app.image}" alt={app.alt} loading="lazy" />
				<h4>{app.name}</h4>
				<p>{app.blurb}</p>
			</article>
		{/each}
	</div>

	<a class="cta" href={item.link} target="_blank" rel="noopener">
		{item.linkLabel}
		<span aria-hidden="true">↗</span>
	</a>
</div>

<style>
	.panel {
		background: var(--surface);
		border: 1px solid var(--border);
		border-top: 3px solid var(--accent);
		border-radius: 10px;
		padding: 1.75rem 1.75rem 2rem;
	}

	h3 {
		margin: 0;
		font-size: 1.7rem;
		letter-spacing: -0.01em;
	}

	.tagline {
		margin: 0.3rem 0 1.1rem;
		font-size: 1.02rem;
		color: var(--accent-ink);
		font-weight: 600;
	}

	.body {
		margin: 0 0 0.9rem;
		font-size: 0.95rem;
		max-width: 62ch;
	}

	.status {
		margin: 1.1rem 0 0;
		padding: 0.7rem 0.9rem;
		border-left: 3px solid var(--border);
		border-radius: 0;
		background: var(--bg-alt, #f9f9f9);
		font-size: 0.87rem;
		color: var(--text-muted);
		max-width: 62ch;
	}

	.apps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
		margin-top: 1.9rem;
	}

	.app img {
		width: 100%;
		border: 1px solid var(--border);
		border-radius: 8px;
		display: block;
	}

	.app h4 {
		margin: 0.85rem 0 0.3rem;
		font-size: 1rem;
	}

	.app p {
		margin: 0;
		font-size: 0.89rem;
		color: var(--text);
	}

	.cta {
		display: inline-block;
		margin-top: 1.9rem;
		padding: 0.6rem 1.4rem;
		border-radius: 999px;
		background: var(--accent);
		color: var(--on-accent);
		text-decoration: none;
		font-size: 0.92rem;
		font-weight: 600;
		transition: filter 0.2s ease;
	}

	.cta:hover {
		filter: brightness(0.9);
	}

	.cta span {
		display: inline-block;
		transition: transform 0.2s ease;
	}

	.cta:hover span {
		transform: translate(2px, -2px);
	}

	@media (max-width: 700px) {
		.panel {
			padding: 1.35rem 1.25rem 1.6rem;
		}

		h3 {
			font-size: 1.45rem;
		}
	}
</style>
