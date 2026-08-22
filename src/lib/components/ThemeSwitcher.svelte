<script>
	import { onMount } from 'svelte';
	import { themes, defaultTheme, applyTheme } from '$lib/data/themes.js';

	let open = $state(false);
	let current = $state(defaultTheme);

	onMount(() => {
		current = localStorage.getItem('portfolio-theme') || defaultTheme;
		applyTheme(current);

		const onDocumentClick = (event) => {
			if (!event.target.closest('.switcher')) open = false;
		};

		document.addEventListener('click', onDocumentClick);
		return () => document.removeEventListener('click', onDocumentClick);
	});

	function select(id) {
		current = id;
		applyTheme(id);
		localStorage.setItem('portfolio-theme', id);
	}
</script>

<div class="switcher" class:open>
	<button
		class="toggle"
		onclick={() => (open = !open)}
		aria-expanded={open}
		aria-label="Change theme colour"
		title="Change theme colour"
	>
		<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
			<path
				fill="currentColor"
				d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.24-.27-.39-.62-.39-1 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8Zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
			/>
		</svg>
	</button>

	<div class="panel" role="group" aria-label="Theme colours">
		{#each themes as theme (theme.id)}
			<button
				class="swatch"
				class:active={current === theme.id}
				style="background: linear-gradient(135deg, {theme.accent}, {theme.accent2});"
				onclick={() => select(theme.id)}
				aria-label={theme.label}
				aria-pressed={current === theme.id}
				title={theme.label}
			></button>
		{/each}
	</div>
</div>

<style>
	.switcher {
		position: fixed;
		right: 24px;
		bottom: 24px;
		z-index: 50;
	}

	.toggle {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		border: none;
		background: var(--accent);
		color: #fff;
		display: grid;
		place-items: center;
		cursor: pointer;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
		transition:
			transform 0.2s ease,
			background 0.3s ease;
	}

	.toggle:hover {
		transform: scale(1.08);
	}

	.panel {
		position: absolute;
		right: 0;
		bottom: 66px;
		display: flex;
		gap: 0.6rem;
		padding: 0.75rem;
		background: var(--surface);
		border-radius: 12px;
		box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
		opacity: 0;
		transform: translateY(10px);
		pointer-events: none;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}

	.switcher.open .panel {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}

	.swatch {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		padding: 0;
		cursor: pointer;
		border: 2px solid #fff;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
		transition: transform 0.15s ease;
	}

	.swatch:hover {
		transform: scale(1.12);
	}

	.swatch.active {
		box-shadow: 0 0 0 2px var(--dark);
	}
</style>
