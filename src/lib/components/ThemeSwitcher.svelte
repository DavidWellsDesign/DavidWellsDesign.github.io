<script>
	import { onMount } from 'svelte';
	import {
		themes,
		defaultTheme,
		applyTheme,
		currentMode,
		applyMode
	} from '$lib/data/themes.js';

	let open = $state(false);
	let current = $state(defaultTheme);
	let mode = $state('light');

	onMount(() => {
		current = localStorage.getItem('portfolio-theme') || defaultTheme;
		applyTheme(current);
		mode = currentMode();

		// Follow system changes, unless the visitor has picked a mode themselves.
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const onSystemChange = () => {
			if (!document.documentElement.dataset.mode) mode = currentMode();
		};
		media.addEventListener('change', onSystemChange);

		const onDocumentClick = (event) => {
			if (!event.target.closest('.switcher')) open = false;
		};
		document.addEventListener('click', onDocumentClick);

		return () => {
			media.removeEventListener('change', onSystemChange);
			document.removeEventListener('click', onDocumentClick);
		};
	});

	function select(id) {
		current = id;
		applyTheme(id);
		localStorage.setItem('portfolio-theme', id);
	}

	function toggleMode() {
		mode = mode === 'dark' ? 'light' : 'dark';
		applyMode(mode);
	}
</script>

<div class="switcher" class:open>
	<div class="panel" role="group" aria-label="Theme colours">
		{#each themes as theme (theme.id)}
			<button
				class="swatch"
				class:active={current === theme.id}
				style="background: {theme.accent};"
				onclick={() => select(theme.id)}
				aria-label={theme.label}
				aria-pressed={current === theme.id}
				title={theme.label}
			></button>
		{/each}
	</div>

	<button
		class="fab secondary"
		onclick={toggleMode}
		aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
	>
		{#if mode === 'dark'}
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
				<circle cx="12" cy="12" r="4.5" fill="currentColor" />
				<g stroke="currentColor" stroke-width="2" stroke-linecap="round">
					<path
						d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"
					/>
				</g>
			</svg>
		{:else}
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
				<path fill="currentColor" d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z" />
			</svg>
		{/if}
	</button>

	<button
		class="fab"
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
</div>

<style>
	.switcher {
		position: fixed;
		right: 24px;
		bottom: 24px;
		z-index: 50;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.6rem;
	}

	.fab {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		border: none;
		background: var(--accent);
		color: var(--on-accent);
		display: grid;
		place-items: center;
		cursor: pointer;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
		transition:
			transform 0.2s ease,
			background 0.3s ease,
			color 0.3s ease;
	}

	.fab.secondary {
		width: 42px;
		height: 42px;
		background: var(--surface);
		color: var(--heading);
		border: 1px solid var(--border);
	}

	.fab:hover {
		transform: scale(1.08);
	}

	.panel {
		position: absolute;
		right: 64px;
		bottom: 0;
		display: flex;
		gap: 0.6rem;
		padding: 0.75rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 12px;
		box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
		opacity: 0;
		transform: translateX(10px);
		pointer-events: none;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}

	.switcher.open .panel {
		opacity: 1;
		transform: translateX(0);
		pointer-events: auto;
	}

	.swatch {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		padding: 0;
		cursor: pointer;
		border: 2px solid var(--surface);
		box-shadow: 0 0 0 1px var(--border);
		transition: transform 0.15s ease;
	}

	.swatch:hover {
		transform: scale(1.12);
	}

	.swatch.active {
		box-shadow: 0 0 0 2px var(--heading);
	}
</style>
