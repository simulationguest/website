<script>
	import { NavList } from '$lib/nav';
	import Logo from '$lib/logo.svg';
	import Meta from '$lib/Meta.svelte';
</script>

<Meta title="leoj.de" description="my personal homepage">
	<div class="w-full min-h-[80vh] grid place-items-center">
		<main class="text-center flex flex-col gap-4 items-center">
			<a href="/"><img src={Logo} alt="leoj.de" class="text-xl dark:invert h-32" /></a>
			{#each Object.entries(NavList) as [href, label]}
				<a
					{href}
					class="text-4xl mt-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:italic block"
					>{label}</a
				>
			{/each}
		</main>
	</div>
</Meta>
