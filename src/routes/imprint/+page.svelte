<script>
	import Wrapper from '$lib/Page.svelte';
</script>

<Wrapper title="Imprint" description="Imprint of leoj.de">
	<main>
		<section>
			<h2>Information according to German §5 of TMG</h2>

			<p>
				Leo Jofer <br />
				Heisenbergstraße 7<br />
				85748 Garching bei München <br />
				Germany
			</p>

			<p><a href="mailto:contact@leoj.de" class="link">contact@leoj.de</a></p>
		</section>

		<section>
			<h2>Copyright</h2>

			<p>
				This website and its contents are subject to German copyright law. Unless expressly
				permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing,
				or processing the design of this site, or its containing works, is subject to copyright
				protection and requires my prior consents.
			</p>

			<p>
				Individual reproductions of a work are allowed only for private use, so must not serve
				either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is
				punishable (§ 106 of the copyright law).
			</p>
		</section>

		<section>
			<h2>Limitation of liability for internal content</h2>

			<p>
				The contents of this website have been created with my utmost care. However, I cannot
				guarantee the contents' accuracy, completeness, or topicality. According to statutory
				provisions, I'm furthermore responsible for my own content. In this context, please note
				that I'm accordingly not obliged to monitor merely the transmitted or saved information of
				third parties, or investigate circumstances pointing to illegal activity.
			</p>

			<p>
				My obligation to remove or block the use of information under generally applicable laws
				remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
			</p>
		</section>
	</main>
</Wrapper>

<style>
	section,
	main {
		@apply flex flex-col gap-4;
	}
	h2 {
		@apply mt-4 text-xl;
	}
</style>
