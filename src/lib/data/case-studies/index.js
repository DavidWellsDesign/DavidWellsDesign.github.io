import { dev } from '$app/environment';
import voyage from './voyage.js';

// ─────────────────────────────────────────────────────────────────────────
// To publish a case study, move it from `drafts` to `published`. That's the
// only switch — `published` studies get built as real pages and linked from
// the work grid; `drafts` are visible in `npm run dev` only and are stripped
// out of the production bundle entirely, so unfinished writing is never
// downloadable from the live site.
// ─────────────────────────────────────────────────────────────────────────

/** Live. Built to /work/<slug>/ and linked from the project card. */
const published = [];

/** Work in progress. Preview at http://localhost:5173/work/<slug>/ */
const drafts = [voyage];

// `dev` is replaced with `false` at build time, so this collapses to an empty
// array and the draft modules get tree-shaken away.
const previewable = dev ? drafts : [];

export const publishedCaseStudies = published;

/** Published only — used by the route so drafts never reach the live site. */
export function getPublishedCaseStudy(slug) {
	return published.find((study) => study.slug === slug);
}

/** Includes drafts in dev, so you can preview work in progress. */
export function getCaseStudy(slug) {
	return published.find((study) => study.slug === slug) ??
		previewable.find((study) => study.slug === slug);
}

/** A live case study — the card links to it for everyone. */
export function hasPublishedCaseStudy(slug) {
	return Boolean(slug) && published.some((study) => study.slug === slug);
}

/**
 * A draft you can still click through to in `npm run dev`. Always false in a
 * production build, so the link never appears on the live site.
 */
export function hasDraftCaseStudy(slug) {
	return Boolean(slug) && previewable.some((study) => study.slug === slug);
}
