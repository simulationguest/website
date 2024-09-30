<script>
	import { page } from '$app/stores';
	import { NavList } from './nav';
	import Logo from './logo.svg';
	import Meta from './Meta.svelte';

	export let title = '';
	export let description;
</script>

<Meta {title} {description}>
	<nav class="w-full flex flex-col sm:flex-row justify-between items-center gap-5 mt-10 mb-12">
		<a href="/">
			<img src={Logo} alt="leoj.de" class="h-16 dark:invert text-xl" />
		</a>
		<div class="flex flex-row gap-2 items-center">
			{#each Object.entries(NavList) as [href, label]}
				<a {href} class="px-1 py-0.5 link" class:underline={$page.url.pathname.startsWith(href)}
					>{label}</a
				>
			{/each}
		</div>
	</nav>
	<h1 class="text-4xl mb-4">{title}</h1>
	<div id="content">
		<slot />
	</div>
</Meta>

<style>
	#content :global(.link) {
		text-decoration: underline;
	}
</style>
