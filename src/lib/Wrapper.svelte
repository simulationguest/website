<script>
	import { page } from '$app/stores';
	import { NavList } from './nav';

	export let title = '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="w-full max-w-4xl mx-auto px-10 mb-10">
	<nav class="w-full flex flex-col sm:flex-row justify-between items-center gap-5 my-10">
		<a href="/" class="text-2xl">leoj.de</a>

		<div class="flex flex-row gap-2 items-center">
			{#each Object.entries(NavList) as [href, label]}
				<a {href} class="px-1 py-0.5 link" class:underline={href == $page.url.pathname}>{label}</a>
			{/each}
		</div>
	</nav>

	<h1 class="text-4xl mt-12 mb-4">{title}</h1>
	<slot />
	<footer class="my-8">
		&copy; 2024 Leo J. &mdash;
		<a href="/imprint" class="link">Imprint</a>
	</footer>
</div>
