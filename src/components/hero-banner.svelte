<script>
	import LetsTalkButton from './lets-talk-button.svelte';
	export let backgroundImage = '/';
</script>

<!-- custom-software-hero.jpeg -->
<section id="hero" title="Hero Section" class="w-full h-auto mx-auto border-b-2 border-blue-400">
	<picture class="grid min-h-[300px] md:min-h-[400px] h-auto">
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
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full max-h-[520px]"
			alt="Staffing Innovation Hero"
			src={backgroundImage}
			style="aspect-ratio: 75/34;"
		/>
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%);
	}
</style>
