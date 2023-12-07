<script>
	import SectionContainer from '../../../components/section-container.svelte';
</script>

<SectionContainer tittle="who-we-are" backgroundColor="bg-[--light-gray]">
	<article class="flex flex-col col-span-2 gap-5 text-md md:col-span-1" title="Who we are Article">
		<header class="mb-5">
			<h2 class="text-3xl font-light md:col-span-1 md:text-5xl">Who we are</h2>
		</header>
		<p>
			<span class="font-semibold">Stack IT</span>, based in San Diego, CA, is your gateway to
			success. Since 2017, we've linked companies with top
			<span class="font-semibold text-[var(--blue)]"> tech professionals </span>
			from Latin America, providing
			<span class="font-semibold text-[var(--blue)]">
				cost-effective remote staffing solutions.
			</span> Our motto, "Success. Coded." underscores our commitment to delivering the ideal technical
			talent for your needs. We're shaping the future of work with a diverse tech workforce.
		</p>
		<p>
			Discover innovative staffing services and stay updated with the latest
			<span class="font-semibold text-[var(--blue)]">talent acquisition trends.</span>
		</p>
		<p>
			Explore our
			<span class="font-semibold text-[var(--blue)]">
				Stack It staffing services, remote talent,
			</span>
			and insightful
			<span class="font-semibold text-[var(--blue)]"> tech recruitment best practices </span> in our
			blog. When you're ready, contact Stack It to unlock success.
		</p>
		<a class="w-fit" href="/about">
			<button
				class="text-base flex items-center justify-center gap-2 rounded-full text-[--brand-blue] border-[1.5px] border-[--blue] h-10 w-40 hover:bg-[--blue] hover:text-white transition-colors duration-400"
			>
				About
			</button>
		</a>
	</article>

	<picture
		class="grid col-span-2 md:col-span-1 h-fit"
		title="Image to describe Software Development"
	>
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay rounded-xl" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid w-full h-full gap-1 text-3xl font-light text-white md:text-4xl place-content-center"
		>
			<span>Success. </span>
			<span class="text-[var(--blue)]">Coded.</span>
		</div>
		<source
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full"
			media="(min-width: 768px)"
			srcset="/images/success_coded.jpeg"
		/>
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full rounded-xl max-h-[400px]"
			alt="Software Development"
			src="/images/success_coded.jpeg"
		/>
	</picture>
</SectionContainer>

<style>
	.overlay {
		background: linear-gradient(
			166deg,
			rgba(3, 21, 35, 0.76) 54.75%,
			rgba(1, 111, 206, 0.2) 117.24%
		);
		box-shadow: inset 0 0 10px rgba(1, 111, 206, 0.2);
	}
</style>
