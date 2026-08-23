// Keep in sync with the inline theme script in src/app.html.
export const themes = [
	{ id: 'ocean', label: 'Ocean', accent: '#3498db', accent2: '#8e44ad', dark: '#35424a' },
	{ id: 'forest', label: 'Forest', accent: '#16a085', accent2: '#27ae60', dark: '#1e3a34' },
	{ id: 'sunset', label: 'Sunset', accent: '#e67e22', accent2: '#e74c3c', dark: '#4a2c2a' },
	{ id: 'rose', label: 'Rose', accent: '#e84393', accent2: '#6c5ce7', dark: '#3a2e44' },
	{ id: 'slate', label: 'Slate', accent: '#4a5568', accent2: '#718096', dark: '#1a202c' },
	{ id: 'yellow', label: 'Yellow', accent: '#fcba03', accent2: '#e38902', dark: '#1a202c' }
];

export const defaultTheme = 'ocean';

export function applyTheme(id) {
	const theme = themes.find((t) => t.id === id);
	if (!theme) return;
	const style = document.documentElement.style;
	style.setProperty('--accent', theme.accent);
	style.setProperty('--accent-2', theme.accent2);
	style.setProperty('--dark', theme.dark);
}
