<script>
	import { NavList } from '$lib/nav';
	import Logo from '$lib/logo.svg';
	import Meta from '$lib/Meta.svelte';
</script>

<svelte:head>
	<title>leoj.de</title>
</svelte:head>

<Meta title="" description="">
	<div class="w-full min-h-[80vh] grid place-items-center">
		<main class="text-center flex flex-col gap-4 items-center">
			<img src={Logo} alt="leoj.de" class="text-xl" />
			{#each Object.entries(NavList) as [href, label]}
				<a {href} class="text-4xl mt-2 hover:bg-black hover:text-white hover:italic block"
					>{label}</a
				>
			{/each}
		</main>
	</div>
</Meta>
