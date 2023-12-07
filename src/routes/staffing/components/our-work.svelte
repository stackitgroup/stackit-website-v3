<script lang="ts">
	import { CaseStudies, type CaseStudy } from '../../case-study/data/case-studies';
	let modalOpen = false;

	let currentCaseStudy: CaseStudy = {};

	const createSelectCaseStudyClick = (caseStudy: CaseStudy) => () => {
		console.log(caseStudy);
		currentCaseStudy = caseStudy;
		modalOpen = !modalOpen;
	};
</script>

<section id="how-to-work-together" class="w-full p-[5%]" title="How to work together Section">
	<div class="grid grid-cols-3 mx-auto w-full max-w-[1730px] gap-5">
		<header class="col-span-3 px-5 2xl:px-0 md:text-5xl pb-[5%] grid gap-5">
			<h2>
				Our
				<span class="text-[var(--blue)]">Work</span>
			</h2>
			<span class="pl-5 text-xl text-gray-500">
				Here's a snapshot of our past successes and the tools we use to deliver exceptional
				services.
			</span>
		</header>

		{#each CaseStudies as e}
			<article title={e.title} class="grid col-span-3 md:col-span-1">
				<div
					class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid gap-4 px-10 md:place-content-between font-normal text-gray-200"
				>
					<header>
						<h3 class="text-2xl text-[var(--blue)] relative">{e.title}</h3>
						<small>
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

				<!-- Background -->
				<div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay rounded-xl" />
				<img
					class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2] rounded-xl"
					alt="who_we_are"
					src="/images/how-to-work-together-discovery.png"
				/>
			</article>
		{/each}
	</div>
</section>

<dialog class="modal modal-bottom sm:modal-middle modal-open" class:modal-open={modalOpen}>
	<div class="modal-box">
		<h3 class="text-lg font-bold text-white">{currentCaseStudy.title}</h3>

		<picture class="grid justify-center">
			<img class="object-contain h-52" src={currentCaseStudy.image} alt={currentCaseStudy.title} />
		</picture>

		<br />
		<p class="text-white">
			{currentCaseStudy.description}
		</p>

		<div class="modal-action">
			<a
				class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-44 bg-[#016fce] transition-colors duration-400"
				href="/case-study/{currentCaseStudy.id}">See Case Study</a
			>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={() => (modalOpen = !modalOpen)}>close</button>
	</form>
</dialog>

<style>
	.overlay {
		background: linear-gradient(
			137deg,
			rgba(3, 21, 35, 0.76) 54.87%,
			rgba(1, 111, 206, 0.2) 101.73%
		);
	}

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
