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

		<a class="w-fit mx-auto md:mx-0" href="/about">
			<button
				class="text-base flex items-center justify-center gap-2 rounded-full text-[--brand-blue] border-[1.5px] border-[--blue] h-10 w-40 hover:bg-[--blue] hover:text-white transition-colors duration-400"
			>
				About
			</button>
		</a>
	</article>

	<picture class="grid col-span-2 md:[grid-column:2/2] md:[grid-row:1/2]">
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay rounded-xl" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid gap-1 text-2xl font-light text-white place-content-center"
		>
			<span>
				<span class="font-semibold text-[var(--blue)]">20+ </span>
				Countries
			</span>

			<span>
				<span class="font-semibold text-[var(--blue)]">7+ </span>
				World Cups
			</span>
			<span>
				<span class="font-semibold text-[var(--blue)]">1M+ </span>
				Clients
			</span>
		</div>
		<source
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full"
			media="(min-width: 768px)"
			src="/images/success_coded.jpeg"
		/>
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full rounded-xl"
			alt="who_we_are"
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
