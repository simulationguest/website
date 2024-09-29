<script lang="ts">
	import Wrapper from '$lib/Wrapper.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<Wrapper title="Blog">
	<ul class="list-disc pl-10 mt-8">
		{#each data.posts as post}
			<li>
				<a href="/blog/{post.slug}"><span class="text-gray-500 mr-1">{post.date}</span> {post.title}</a>
			</li>
		{/each}
	</ul>
</Wrapper>
