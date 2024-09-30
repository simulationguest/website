import { posts } from '../posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

	const post = posts.find(post => params.slug === post.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};