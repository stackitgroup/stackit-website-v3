<script lang="ts">
	import { fade } from 'svelte/transition';
	import LetsTalkButton from './lets-talk-button.svelte';

	export let section: 'staffing' | 'custom-software' = 'staffing';
	const images: Record<string, string[]> = {
		staffing: [
			'/images/custom-software-hero.jpeg',
			'/images/staffing-hero.jpeg',
			'/images/custom-software-hero.jpeg',
			'/images/staffing-hero.jpeg',
			'/images/custom-software-hero.jpeg',
			'/images/staffing-hero.jpeg'
		],
		'custom-software': [
			'/images/custom-software-hero.jpeg',
			'/images/staffing-hero.jpeg',
			'/images/custom-software-hero.jpeg',
			'/images/staffing-hero.jpeg',
			'/images/custom-software-hero.jpeg',
			'/images/staffing-hero.jpeg',
			'/images/custom-software-hero.jpeg',
			'/images/staffing-hero.jpeg',
			'/images/custom-software-hero.jpeg'
		]
	};

	let imageIndex = 0;

	const nextImage = () => {
		imageIndex = imageIndex === images[section].length - 1 ? 0 : imageIndex + 1;
	};

	const prevImage = () => {
		imageIndex = imageIndex === 0 ? images[section].length - 1 : imageIndex - 1;
	};
</script>

<!-- custom-software-hero.jpeg -->
<section id="hero" title="Hero Section" class="w-full h-auto mx-auto border-b-2 border-blue-400">
	<picture class="grid min-h-[300px] md:min-h-[400px] h-auto relative">
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid justify-start px-[5%] text-2xl font-light text-white duration-500 md:text-5xl place-content-center"
		>
			<slot name="tittle">
				<span class="missing">Unknown name</span>
			</slot>

			<br />
			<LetsTalkButton />
		</div>

		{#each images[section] as image, index}
			{#if index === imageIndex}
				<img
					src={image}
					alt="Staffing Innovation Hero"
					class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full max-h-[520px]"
					style="aspect-ratio: 75/34;"
					transition:fade={{ duration: 500 }}
				/>
			{/if}
		{/each}

		<button class="absolute z-20 text-2xl text-white bottom-5 left-5" on:click={prevImage}
			>👈</button
		>
		<button class="absolute z-20 text-2xl text-white bottom-5 right-5" on:click={nextImage}
			>👉</button
		>
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%);
	}
</style>
