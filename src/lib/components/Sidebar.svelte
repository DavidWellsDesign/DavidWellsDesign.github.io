<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { social } from '$lib/data/resume.js';
	import { site } from '$lib/data/site.js';

	// 'home' renders the section nav with scroll-spy; 'detail' swaps it for a
	// back link, since case study pages have no #work / #skills anchors.
	let { variant = 'home' } = $props();

	const links = [
		{ id: 'work', label: 'Work' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'education', label: 'Education' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'contact', label: 'Contact' }
	];

	let active = $state('work');

	onMount(() => {
		if (variant !== 'home') return;

		const sections = links
			.map((link) => document.getElementById(link.id))
			.filter(Boolean);

		if (!sections.length || typeof IntersectionObserver === 'undefined') return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-20% 0px -70% 0px' }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});
</script>

<aside class="sidebar">
	<div class="inner">
		<div class="identity">
			{#if variant === 'home'}
				<h1>{site.name}</h1>
			{:else}
				<p class="name"><a href="{base}/">{site.name}</a></p>
			{/if}
			<p class="role">{site.role}</p>
			<p class="bio">{site.bio}</p>
		</div>

		{#if variant === 'home'}
			<nav aria-label="Sections">
				<ul>
					{#each links as link (link.id)}
						<li>
							<a
								href="#{link.id}"
								class:active={active === link.id}
								aria-current={active === link.id ? 'true' : undefined}
							>
								<span class="marker" aria-hidden="true"></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{:else}
			<nav aria-label="Back">
				<ul>
					<li>
						<a href="{base}/#work" class="active">
							<span class="marker" aria-hidden="true"></span>
							Back to work
						</a>
					</li>
				</ul>
			</nav>
		{/if}

		<ul class="social">
			{#each social as item (item.label)}
				<li>
					<a href={item.url} target="_blank" rel="noopener">{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<style>
	.sidebar {
		background: linear-gradient(160deg, var(--accent), var(--accent-2));
		color: #fff;
		position: sticky;
		top: 0;
		height: 100vh;
		transition: background 0.4s ease;
	}

	.inner {
		height: 100%;
		padding: 3.5rem 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		overflow-y: auto;
	}

	h1,
	.name {
		color: #fff;
		font-size: 2.2rem;
		font-weight: 700;
		margin: 0;
		letter-spacing: -0.02em;
		line-height: 1.25;
	}

	.name a {
		color: inherit;
		text-decoration: none;
	}

	.name a:hover {
		text-decoration: underline;
	}

	.role {
		margin: 0.25rem 0 0;
		font-size: 1.05rem;
		opacity: 0.9;
	}

	.bio {
		margin: 1.25rem 0 0;
		font-size: 0.92rem;
		line-height: 1.7;
		opacity: 0.82;
		max-width: 26ch;
	}

	nav ul,
	.social {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.4rem 0;
		color: #fff;
		text-decoration: none;
		font-size: 0.82rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.7;
		transition: opacity 0.2s ease;
	}

	nav a:hover,
	nav a.active {
		opacity: 1;
	}

	.marker {
		display: block;
		height: 1px;
		width: 24px;
		background: currentColor;
		transition:
			width 0.25s ease,
			opacity 0.25s ease;
		opacity: 0.6;
	}

	nav a:hover .marker,
	nav a.active .marker {
		width: 48px;
		opacity: 1;
	}

	.social {
		margin-top: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
	}

	.social a {
		color: #fff;
		font-size: 0.85rem;
		opacity: 0.75;
		text-decoration: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
		padding-bottom: 2px;
		transition: opacity 0.2s ease;
	}

	.social a:hover {
		opacity: 1;
	}

	@media (max-width: 900px) {
		.sidebar {
			position: static;
			height: auto;
		}

		.inner {
			padding: 2.5rem 1.5rem;
			gap: 1.75rem;
			overflow: visible;
		}

		h1,
		.name {
			font-size: 1.9rem;
		}

		.bio {
			max-width: none;
		}

		nav ul {
			display: flex;
			flex-wrap: wrap;
			gap: 0 1.5rem;
		}

		.marker {
			display: none;
		}

		nav a {
			gap: 0;
		}

		.social {
			margin-top: 0;
		}
	}
</style>
