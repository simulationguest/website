<script>
	export let label;
</script>

<div class="flex flex-col gap-1 md:flex-row md:gap-4">
	<div class="text-gray-500 md:w-24 md:text-right">{label}</div>
	<div><slot /></div>
</div>
