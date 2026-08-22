<script>
	import { base } from '$app/paths';

	let { project } = $props();
</script>

<article class="card">
	<a class="thumb" href={project.link} target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
		<img src="{base}{project.image}" alt="" loading="lazy" />
		<span class="category">{project.category}</span>
	</a>

	<div class="body">
		<h3>{project.title}</h3>
		<p class="description">{project.description}</p>

		<ul class="tech">
			{#each project.tech as tag (tag)}
				<li>{tag}</li>
			{/each}
		</ul>

		<a class="link" href={project.link} target="_blank" rel="noopener">
			{project.linkLabel}
			<span aria-hidden="true">→</span>
		</a>
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

	.thumb img {
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

	.link {
		margin-top: 1.1rem;
		align-self: flex-start;
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
		transform: translateX(4px);
	}
</style>
