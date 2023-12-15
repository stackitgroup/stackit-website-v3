<script>
	import SectionContainer from '../../../components/section-container.svelte';
</script>

<SectionContainer tittle="Maintenance & Support Section" backgroundColor="bg-[--blue]">
	<article class="flex flex-col gap-7 col-span-2 text-md md:col-span-1 text-white [&>p]:opacity-80">
		<header>
			<h2 class="text-3xl md:col-span-1 md:text-4xl">Maintenance & Support</h2>
		</header>
		<p>
			At Stack IT, we don't stop at creation; we <span class="font-semibold"> care. </span>
			Our commitment extends to providing comprehensive
			<span class="font-semibold">maintenance and support</span> that covers everything from
			enhancements to bug fixes and vigilant
			<span class="font-semibold">system monitoring.</span>
		</p>

		<p>
			We continually assess your software's <span class="font-semibold"> usability </span>, conduct
			<span class="font-semibold">code audits</span>, and rigorously test your
			<span class="font-semibold">cloud infrastructure.</span> This approach ensures your software
			remains in peak condition, allowing us to provide
			<span class="font-semibold">insightful advice</span> that informs your critical business decisions.
			Choose Stack IT for ongoing care that ensures the longevity and performance of your software solutions.
		</p>
	</article>

	<picture class="grid col-span-2 md:[grid-column:1/2] md:[grid-row:1/2]">
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
			srcset="/images/staffing_innovation.png"
		/>
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full rounded-xl"
			alt="who_we_are"
			src="/images/staffing_innovation.png"
		/>
	</picture>
</SectionContainer>

<style>
	.overlay {
		background: linear-gradient(137deg, rgba(3, 21, 35, 0.76) 53.14%, rgba(1, 111, 206, 0.2) 100%);
		box-shadow: inset 0 0 10px rgba(1, 111, 206, 0.2);
	}
</style>
