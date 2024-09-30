<script>
	export let title = '';
	export let description;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<meta property="og:site_name" content="leoj.de" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://leoj.de" />
	<meta property="og:description" content={description} />
</svelte:head>

<div class="w-full max-w-4xl mx-auto px-6 md:px-10 mb-10">
	<slot />
	<footer class="my-8">
		&copy; 2024 Leo J. &mdash;
		<a href="/imprint" class="link">Imprint</a>
	</footer>
</div>

<style>
	#content :global(.link) {
		text-decoration: underline;
	}
</style>
