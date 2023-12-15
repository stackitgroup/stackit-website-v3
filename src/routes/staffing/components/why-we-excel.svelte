<script lang="ts">
	const Cards = [
		{
			title: `<h3 class="text-2xl md:text-5xl md:font-light">Expertise</h3>`,
			background: 'bg-white',
			textBaseColor: 'text-black',
			description: `<p class="font-light md:text-lg">
				Our foundation is built on <span class="font-medium text-[var(--blue)]">expertise.</span>
				We harness our knowledge of the
				<span class="font-medium text-[var(--blue)]">LATAM tech industry</span>
				to seamlessly connect you with the region's
				<span class="font-medium text-[var(--blue)]">top tech talent.</span>
			</p>
			`,
			number: `
			<span
				class="md:text-[6rem] md:justify-start flex items-center justify-center w-1/3 h-48 md:h-24 font-light text-[12rem]"
			>
				1
			</span>
			`
		},
		{
			title: `<h3 class="text-2xl md:text-5xl md:font-light">Quality</h3>`,
			background: 'overlay',
			textBaseColor: 'text-white',
			description: `
			<p class="font-light md:text-lg">
					Our <span class="font-medium"> veteran tech and HR team </span>
					is dedicated to upholding vetting procedures, guaranteeing that every candidate we place is
					not only a <span class="font-medium"> perfect technical fit </span>
					but also an impeccable <span class="font-medium">cultural fit</span> for your organization.
				</p>
				`,
			number: `
			<span
				class="md:text-[6rem] md:justify-start flex items-center justify-center w-1/3 h-48 md:h-24 font-light text-[12rem]"
			>
				2
			</span>
			`
		},
		{
			title: `<h3 class="text-2xl md:text-5xl text-[var(--blue)] md:font-light consistency-gradient">
					Consistency
				</h3>`,
			background: 'bg-gray-200',
			description: `<p class="font-light md:text-lg">
					We provide ongoing coaching and professional development for our candidates while
					fostering
					<span class="font-medium text-[var(--blue)]">
						close collaboration with your organization.
					</span>
					Our priority is to sustain the
					<span class="font-medium text-[var(--blue)]">highest quality</span> in every aspect of our
					service.
				</p>`,
			number: `
			<span
				class="md:text-[6rem] md:justify-start flex items-center justify-center w-1/3 md:h-24 h-48 font-light text-[12rem] text-[var(--blue)]"
			>
				3
			</span>
			`
		}
	];
</script>

<section id="why-we-excel" title="Why we excel. Why Us" class="w-full py-[10%] md:py-[3%] px-[5%]">
	<div class="grid grid-cols-3 gap-5 xl:gap-10 w-full mx-auto max-w-[1730px]">
		<h2 class="col-span-3 px-5 text-3xl font-light 2xl:px-0 md:text-5xl pb-[1%]">
			Why we excel.
			<span class="font-normal">Why us.</span>
		</h2>
		{#each Cards as e}
			<article
				class="{e.textBaseColor} flex items-center col-span-3 p-[1%] md:p-[5%] {e.background} md:items-start md:flex-col md:col-span-1 rounded-xl border border-[--light-blue] md:h-[408px]"
				title={e.title}
			>
				{@html e.number}
				<div class="flex flex-col w-2/3 gap-4 px-2 py-5 md:w-full">
					{@html e.title}
					{@html e.description}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.overlay {
		background: linear-gradient(106deg, #293c4d -8.12%, #026ecb 125.69%);
	}

	.consistency-gradient {
		background: linear-gradient(103deg, #031523 -21.75%, #016fce 77.71%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	article:nth-of-type(1) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 15%;
	}
	article:nth-of-type(2) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 25%;
	}
	article:nth-of-type(3) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 35%;
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
