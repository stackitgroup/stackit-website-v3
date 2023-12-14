<script lang="ts">
	import { CaseStudies, type CaseStudy } from '../../case-study/data/case-studies';
	let modalOpen = false;

	let currentCaseStudy = {} as CaseStudy;

	const createSelectCaseStudyClick = (caseStudy: CaseStudy) => () => {
		currentCaseStudy = caseStudy;
		modalOpen = !modalOpen;
	};
</script>

<section id="our-work" class="w-full p-[5%] bg-[--gray]" title="How to work together Section">
	<div class="grid grid-cols-3 mx-auto w-full max-w-[1730px] gap-10">
		<header class="grid col-span-3 gap-5 px-5 2xl:px-0 md:text-5xl">
			<h2 class="text-3xl md:text-5xl text-[--blue]">Our Work</h2>
			<span class="text-xl opacity-80">
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
						<h3 class="text-2xl relative text-[--brand-blue] font-semibold">
							{e.title}
						</h3>
						<small class="text-black opacity-80">
							{e.introduction}
						</small>
					</header>
					<picture class="grid content-center justify-center h-40 my-5">
						<img class="object-contain h-40" src={e.image} alt="" />
					</picture>
					<footer>
						<button
							class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-44 bg-[#016fce] transition-colors duration-400"
							on:click={createSelectCaseStudyClick(e)}
						>
							Read More
							<img src="/icons/arrow.svg" class="w-3 rotate-90" alt="arrow to scroll up" />
						</button>
					</footer>
				</div>
			</article>
		{/each}
	</div>
</section>

<dialog class="modal modal-bottom sm:modal-middle" class:modal-open={modalOpen}>
	<div class="modal-box bg-[--gray] p-[3%] max-w-[600px] md:overflow-y-hidden">
		<h3 class="text-lg font-bold text-black">{currentCaseStudy.title}</h3>

		<picture class="grid justify-center">
			<img class="object-contain h-52" src={currentCaseStudy.image} alt={currentCaseStudy.title} />
		</picture>

		<br />
		<p class="text-black bg-red">
			{currentCaseStudy.description}
		</p>

		<div class="modal-action">
			<a
				class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-44 bg-[--blue] transition-colors duration-400"
				href="/case-study/{currentCaseStudy.id}">See Case Study</a
			>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={() => (modalOpen = !modalOpen)}>close</button>
	</form>
</dialog>

<style>
	article:nth-of-type(1) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 10%;
	}
	article:nth-of-type(2) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 15%;
	}
	article:nth-of-type(3) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 25%;
	}

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
