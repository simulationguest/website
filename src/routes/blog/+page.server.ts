import { posts } from './posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({posts});