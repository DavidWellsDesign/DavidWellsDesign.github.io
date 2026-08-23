import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';
import {
	publishedCaseStudies,
	getCaseStudy,
	getPublishedCaseStudy
} from '$lib/data/case-studies/index.js';

// Tells the static adapter which case study pages to write out. Drafts are
// excluded, so unfinished writing never reaches the live site.
export function entries() {
	return publishedCaseStudies.map((study) => ({ slug: study.slug }));
}

export function load({ params }) {
	// In `npm run dev` drafts resolve too, so you can preview while writing.
	const study = dev ? getCaseStudy(params.slug) : getPublishedCaseStudy(params.slug);

	if (!study) {
		error(404, 'Case study not found');
	}

	return { study };
}
