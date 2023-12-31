<script lang="ts">
	const Cards = [
		{
			title: `<h3 class="text-2xl md:text-5xl md:font-light">Partnership</h3>`,
			background: 'bg-white',
			textBaseColor: 'text-black',
			description: `<p class="font-light md:text-lg">
				We believe in building <span class="font-medium text-[var(--blue)]">partnerships</span>for
				success. Our primary aim is to maximize the
				<span class="font-medium text-[var(--blue)]">value we bring to our clients.</span> We take
				pride in creating, managing, and delivering products that are not only
				<span class="font-medium text-[var(--blue)]">high-quality</span> but also truly
				<span class="font-medium text-[var(--blue)]">impactful.</span>
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
				We uphold a commitment to <span class="font-medium">
					individual excellence, team synergy,
				</span>
				and structured processes. We invest in
				<span class="font-medium">meticulous hiring practices,</span> proactive team coaching, and
				cultivate an environment that values
				<span class="font-medium">creativity, teamwork, </span>and
				<span class="font-medium">accountability.</span>
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
				Expertise
				</h3>`,
			background: 'bg-gray-200',
			description: `
			<p class="font-light md:text-lg">
				Inevitably, project roadblocks occur. Regardless of the issue, it takes an
				<span class="font-medium text-[var(--blue)]"> expert team </span>to keep things on track.
				With <span class="font-medium text-[var(--blue)]">years of industry</span> wisdom and unwavering
				determination, we are the team to call when the going gets tough.
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

<section id="why-choose-us" class="w-full py-[3%] px-[5%]">
	<div class="grid grid-cols-3 gap-5 xl:gap-10 w-full mx-auto max-w-[1730px]">
		<h2 class="col-span-3 px-5 text-3xl font-light 2xl:px-0 md:text-5xl pb-[4%]">Why Choose Us</h2>
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
