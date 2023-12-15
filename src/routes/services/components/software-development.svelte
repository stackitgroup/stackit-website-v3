<script>
	import SectionContainer from '../../../components/section-container.svelte';
</script>

<SectionContainer tittle="software-development" backgroundColor="bg-[var(--light-gray)]">
	<article class="flex flex-col col-span-2 gap-5 text-md md:col-span-1">
		<header>
			<h2 class="text-3xl md:col-span-1 md:text-4xl">Software Development</h2>
		</header>
		<p>
			At Stack IT, we're your trusted partner in <span class="font-semibold text-[var(--blue)]">
				software development
			</span>
			and digital transformation. With our extensive experience in cutting-edge technologies, including
			<span class="font-semibold text-[var(--blue)]"> blockchain </span> and
			<span class="font-semibold text-[var(--blue)]"> AI </span>, we specialize in crafting
			innovative
			<span class="font-semibold text-[var(--blue)]"> mobile and web applications.</span>
		</p>
		<p>
			Our expertise and agile approach empower us to deliver transformative solutions that elevate
			your operations. If you can envision it, we have the expertise to <span
				class="font-semibold text-[var(--blue)]">build it.</span
			> Whether you're in need of blockchain-powered solutions or AI-driven applications, Stack IT is
			your go-to destination for forward-looking software development.
		</p>
	</article>

	<picture class="grid col-span-2 md:col-span-1 h-fit">
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay rounded-xl" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid w-full h-full gap-1 text-3xl font-light text-white md:text-4xl place-content-center"
		>
			<span>Bespoke software designed</span>
			<span class="text-[#259AFF] font-normal">Amplify your Path to Success</span>
		</div>
		<source
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full"
			media="(min-width: 768px)"
			srcset="/images/software_development.jpeg"
		/>
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full rounded-xl max-h-[400px]"
			alt="Software Development"
			src="/images/software_development.jpeg"
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
