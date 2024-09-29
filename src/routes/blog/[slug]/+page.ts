import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const component = await import(`../${data.post.slug}.md`);
	return {
		post: data.post,
		component: component.default,
	};
};