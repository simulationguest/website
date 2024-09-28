<script>
	export let name = '';
	export let img = '';
</script>

<div class="flex flex-row items-center gap-12 mb-16">
	<div class="w-64 h-64 shadow">
		<img src={img} alt={name} class="object-cover" />
	</div>
	<div class="flex flex-col items-start gap-4">
		<h2 class="text-3xl">{name}</h2>
		<slot />
	</div>
</div>
