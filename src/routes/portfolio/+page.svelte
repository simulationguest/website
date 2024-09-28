<script>
	import Wrapper from '$lib/Wrapper.svelte';
	import Element from './Element.svelte';
</script>

<Wrapper title="Portfolio">
	<p class="text-xl max-w-xl">
		Tailor-made digital experiences, websites and tools that are simple, correct and a joy to use.
	</p>

	<a href="mailto:contact@leoj.de" class="button mt-4 mb-16">Request an offer</a>

	<Element name="CCI-LEGAL" img="/cci.png">
		<p>
			Full website renovation, coherent design and advanced CMS.<br />
			Aggressive focus on loading times, accessibility and SEO.
		</p>

		<p>
			<!-- <a href="#" class="button mr-2">View case study</a> -->
			<a href="https://cci-legal.de/" target="_blank" class="button">Visit website</a>
		</p>
	</Element>

	<Element name="TOA Bayern" img="/toa.png">
		<p>
			Moved the website to a new hosting provider.<br />
			Decreased operating costs by ~66% and improved design.
		</p>
		<p>
			<a href="https://www.toa-bayern.de/" class="button">Visit website</a>
		</p>
	</Element>

	<Element name="Igelhilfe Grabenstätt" img="/igel.png">
		<p>Designed and implemented website</p>
		<p>
			<a href="https://igelhilfe.org/" class="button">Visit website</a>
		</p>
	</Element>
</Wrapper>
