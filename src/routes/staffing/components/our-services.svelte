<script>
	import SectionContainer from '../../../components/section-container.svelte';
</script>

<SectionContainer backgroundColor="bg-[--blue]" tittle="our-services">
	<article class="flex flex-col gap-5 col-span-2 text-md md:col-span-1 text-white [&>p]:opacity-80">
		<header class="mb-5">
			<h2 class="text-3xl font-light md:col-span-1 md:text-5xl">Our Services</h2>
		</header>
		<p>
			At Stack IT, we've redefined <span class="font-bold"> staffing innovation. </span>
			Our comprehensive
			<span class="font-bold">full-stack staffing solution</span>
			connects you with top-tier
			<span class="font-bold">software developers</span> from Latin America, propelling your business
			to new heights.
		</p>
		<p>
			Through a meticulous selection process, <span class="font-bold">
				tech talent acquisition
			</span>
			becomes a breeze. We customize training to fit your unique needs and evaluate candidates keenly.
			With our expertise, we handpick the
			<span class="font-bold">perfect talent</span> that aligns with your specific requirements, industry
			standards, and technological demands.
		</p>

		<a class="w-fit mx-auto md:mx-0" href="/services">
			<button
				class="text-base flex items-center justify-center gap-2 rounded-full text-black h-10 w-40 bg-white hover:bg-[--white] hover:bg-black hover:text-white transition-colors duration-400"
			>
				Services
			</button>
		</a>
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
