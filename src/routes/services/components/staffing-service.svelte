<script>
	import SectionContainer from '../../../components/section-container.svelte';
</script>

<SectionContainer backgroundColor="bg-white" tittle="Staffing Innovation">
	<article
		class="flex flex-col gap-5 col-span-2 text-md md:col-span-1 text-black [&>p]:opacity-80"
		title="Staffing Innovation Article"
	>
		<h2 class="text-3xl font-light md:col-span-1 md:text-5xl mb-5">Staffing Innovation</h2>

		<p>
			At Stack IT, we've redefined <span class="font-bold text-[--blue]">
				staffing innovation.
			</span>
			Our comprehensive
			<span class="font-bold text-[--blue]">full-stack staffing solution</span>
			connects you with top-tier
			<span class="font-bold text-[--blue]">software developers</span> from Latin America, propelling
			your business to new heights.
		</p>
		<p>
			Through a meticulous selection process, <span class="font-bold text-[--blue]">
				tech talent acquisition
			</span>
			becomes a breeze. We customize training to fit your unique needs and evaluate candidates keenly.
			With our expertise, we handpick the
			<span class="font-bold text-[--blue]">perfect talent</span> that aligns with your specific requirements,
			industry standards, and technological demands.
		</p>
		<p>
			Through a meticulous selection process, <span class="font-bold text-[--blue]">
				tech talent acquisition
			</span>
			becomes a breeze. We customize training to fit your unique needs and evaluate candidates keenly.
			With our expertise, we handpick the
			<span class="font-bold text-[--blue]">perfect talent</span> that aligns with your specific requirements,
			industry standards, and technological demands.
		</p>
		<p>
			<span class="font-bold text-[--blue]">Innovative staffing solutions</span>
			await you at Stack IT. Contact us to explore how our
			<span class="font-bold text-[--blue]">cost-effective tech staffing</span> services can benefit
			your business.
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
