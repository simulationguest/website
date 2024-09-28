<script>
	import { NavList } from '$lib/nav';
</script>

<svelte:head>
	<title>leoj.de</title>
</svelte:head>

<div class="w-full min-h-[80vh] grid place-items-center">
	<main class="text-center flex flex-col gap-4 items-center">
		<h1 class="text-xl">leoj.de</h1>
		{#each Object.entries(NavList) as [href, label]}
			<a {href} class="text-4xl mt-2 hover:bg-black hover:text-white hover:italic block">{label}</a>
		{/each}
	</main>
</div>
