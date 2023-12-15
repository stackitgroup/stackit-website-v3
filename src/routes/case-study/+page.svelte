<script>
	import { CaseStudies } from './data/case-studies';
</script>

<svelte:head>
	<title>Case Study | Stack IT</title>
</svelte:head>

<section id="how-to-work-together" class="w-full p-[5%] bg-[--gray]">
	<div class="grid grid-cols-3 mx-auto w-full max-w-[1730px] gap-5">
		<header class="grid col-span-3 gap-5 px-5 2xl:px-0 md:text-5xl">
			<h2 class="text-3xl md:text-5xl text-[--blue]">Our Work</h2>
			<span class="md:text-xl opacity-80">
				Here's a snapshot of our past successes and the tools we use to deliver exceptional
				services.
			</span>
		</header>

		{#each CaseStudies as e}
			<article title={e.title} class="grid col-span-3 bg-white md:col-span-1 rounded-xl">
				<div
					class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid gap-4 px-10 md:place-content-between font-normal text-gray-200"
				>
					<header>
						<h3 class="text-3xl md:text-2xl relative text-[--brand-blue] font-semibold mb-5">
							{e.title}
						</h3>
						<small class="text-base text-black opacity-80">
							{e.introduction}
						</small>
					</header>
					<picture class="grid content-center justify-center h-40 my-5">
						<img class="object-contain h-40" src={e.image} alt="" />
					</picture>
					<footer>
						<a
							class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-44 bg-[#016fce] transition-colors duration-400"
							href="/case-study/{e.id}"
						>
							View Case Study
							<img src="/icons/arrow.svg" class="w-3 rotate-90" alt="arrow to scroll up" />
						</a>
					</footer>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	@keyframes slideInFromLeft {
		0% {
			transform: translateY(100%);
			scale: 0.5;
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			scale: 1;
			opacity: 1;
		}
	}
</style>
