<script>
	import SectionContainer from '../../../components/section-container.svelte';
</script>

<SectionContainer tittle="custom-software-service">
	<article
		class="flex flex-col gap-5 col-span-2 text-md md:col-span-1 text-black [&>p]:opacity-80"
		title="Custom Software Service Description"
	>
		<h2 class="text-3xl font-light md:col-span-1 md:text-5xl mb-5">Custom Software</h2>
		<p>Experience innovation with Stack IT, your partner for cutting-edge Custom Software.</p>
		<p>
			From blockchain to AI, we craft transformative mobile and web apps with <span
				class="text-[--blue] font-semibold">expertise and agility</span
			>. Our commitment extends to comprehensive
			<span class="text-[--blue] font-semibold">Maintenance & Support</span>, ensuring peak
			performance. Stack IT's tech consulting offers fresh perspectives, aligning tech investments
			with strategic goals.
		</p>
		<p>
			Choose Stack IT <span class="text-[--blue] font-semibold">for forward-looking solutions</span
			>, ongoing care, and insightful consulting, propelling your business
			<span class="text-[--blue] font-semibold">into the digital future</span>.
		</p>
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
