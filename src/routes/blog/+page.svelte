<script lang="ts">
	import Wrapper from '$lib/Wrapper.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<Wrapper title="Blog">
	<main>
		{#each data.posts as post}
			<section class="my-12">
				<h2 class="text-xl">{post.title}</h2>
				<p class="text-gray-500 text-sm">{post.date}</p>
				<p class="my-2">{post.description}</p>
				<p><a href="/blog/{post.slug}" class="link">Read</a></p>
			</section>
		{/each}
	</main>
</Wrapper>
