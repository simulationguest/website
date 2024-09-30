<script lang="ts">
	import type { PageData } from './$types';
	import Wrapper from '$lib/Page.svelte';

	export let data: PageData;
</script>

<Wrapper title={data.post.title} description={data.post.description}>
	<p class="text-lg">{data.post.description}</p>
	<p class="my-8">
		Posted on <span class="semi">{data.post.date}</span> in my
		<a href="/blog" class="link">Blog</a>.
	</p>

	<p class="mb-8"></p>
	<div
		class="prose md:prose-lg prose-headings:font-normal prose-code:font-mono prose-code:before:content-none prose-code:after:content-none max-w-none dark:prose-invert"
	>
		<svelte:component this={data.component} />
	</div>
</Wrapper>
