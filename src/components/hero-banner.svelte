<script lang="ts">
	import { fade } from 'svelte/transition';
	import LetsTalkButton from './lets-talk-button.svelte';

	const carrousel = [
		{
			image: '/images/custom-software-hero.jpeg',
			title: `
			<h1>Custom-built software to</h1>
				<h2>
					&lt;<span class="font-normal text-blue-500">Empower your Success.</span>/>
			</h2>
		`,
			button: "Let's Talk"
		},
		{
			image: '/images/staffing-hero.jpeg',
			title: `
		<h1>Staffing Innovation with</h1>
		<h2 class="font-normal text-blue-500">Latin American</h2>
		<h2>
			&lt;<span class="font-normal text-blue-500">Software Talent</span>/>
		</h2>`,
			button: "Let's Talk"
		}
	];

	let carrouselIndex = 0;

	const nextStage = () => {
		carrouselIndex = carrouselIndex === carrousel.length - 1 ? 0 : carrouselIndex + 1;
	};

	const prevStage = () => {
		carrouselIndex = carrouselIndex === 0 ? carrousel.length - 1 : carrouselIndex - 1;
	};
</script>

<!-- custom-software-hero.jpeg -->
<section id="hero" title="Hero Section" class="w-full h-auto mx-auto border-b-2 border-blue-400">
	<picture class="grid min-h-[300px] md:min-h-[400px] h-auto relative">
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid justify-start px-[5%] text-2xl font-light text-white duration-500 md:text-5xl place-content-center"
		>
			{#each carrousel as e, index}
				{#if index === carrouselIndex}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html e.title}
				{/if}
			{/each}
			<br />
			<LetsTalkButton />
		</div>

		{#each carrousel as e, index}
			{#if index === carrouselIndex}
				<img
					src={e.image}
					alt="Staffing Innovation Hero"
					class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full max-h-[520px]"
					style="aspect-ratio: 75/34;"
					transition:fade={{ duration: 500 }}
				/>
			{/if}
		{/each}

		<button class="absolute z-20 text-2xl text-white bottom-5 left-5" on:click={prevStage}>
			👈
		</button>
		<button class="absolute z-[99] text-2xl text-white bottom-5 right-5" on:click={nextStage}>
			👉
		</button>
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%);
	}
</style>
