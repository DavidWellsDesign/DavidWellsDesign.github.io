const reducedMotion =
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades an element in when it first scrolls into view.
 * Usage: <div use:reveal> or <div use:reveal={{ delay: 80 }}>
 */
export function reveal(node, options = {}) {
	if (reducedMotion || typeof IntersectionObserver === 'undefined') {
		node.classList.add('revealed');
		return {};
	}

	node.classList.add('reveal');
	if (options.delay) node.style.transitionDelay = `${options.delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('revealed');
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.15 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

/**
 * Grows a skill bar to its target width when it scrolls into view.
 * Usage: <div use:fillBar={85}>
 */
export function fillBar(node, level) {
	if (reducedMotion || typeof IntersectionObserver === 'undefined') {
		node.style.width = `${level}%`;
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.style.width = `${level}%`;
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.4 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
