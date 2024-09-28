<script>
	export let name = '';
</script>

<div class="flex flex-col sm:flex-row items-center gap-12 mb-16">
	<slot name="img" />

	<div>
		<h2 class="text-3xl mb-4">{name}</h2>
		<div class="flex flex-col items-start gap-4 leading-6">
			<slot />
		</div>
	</div>
</div>
