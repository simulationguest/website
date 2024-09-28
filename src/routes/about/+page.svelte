<script>
	import Wrapper from '$lib/Wrapper.svelte';
</script>

<Wrapper title="About">
	<div class="flex flex-col gap-4 mt-8">
		<div class="row">
			<div>name</div>
			<div>Leo J.</div>
		</div>
		<div class="row">
			<div>studying</div>
			<div>
				Computer Science at <a href="https://tum.de/" target="_blank"
					>Technical University of Munich</a
				>
			</div>
		</div>
		<div class="row">
			<div>job</div>
			<div>Working student at <a href="https://www.mtu.de/" target="_blank">MTU</a></div>
		</div>
		<div class="row">
			<div>age</div>
			<div>19</div>
		</div>
		<div class="row">
			<div>languages</div>
			<div>Rust, Go, TypeScript, Python, Nix</div>
		</div>
		<div class="row">
			<div>contact</div>
			<div>
				<a href="mailto:contact@leoj.de">E-Mail</a>, <a href="https://git.leoj.de/">GitHub</a>
			</div>
		</div>
	</div>
</Wrapper>

<style>
	a {
		text-decoration: underline;
	}
	.row {
		flex-direction: column;
		display: flex;
		gap: 0.25rem;
	}
	.row > :first-child {
		color: gray;
	}

	@media screen and (min-width: 768px) {
		.row {
			flex-direction: row;
			gap: 1rem;
		}

		.row > :first-child {
			width: 6rem;
			text-align: right;
		}
	}
</style>
