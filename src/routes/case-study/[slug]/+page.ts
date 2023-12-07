import { error } from '@sveltejs/kit';
import { CaseStudies } from '../data/case-studies';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	console.log(params);
	const slug = params.slug;

	const caseStudy = CaseStudies.find((caseStudy) => caseStudy.id === slug);

	if (caseStudy) {
		return {
			caseStudy
		};
	}

	throw error(404, 'Not found');
};
