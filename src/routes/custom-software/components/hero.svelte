<script>
	import LetsTalkButton from '../../../components/lets-talk-button.svelte';
</script>

<section
	id="hero"
	title="Hero Section"
	class="w-full h-full mx-auto border-b-2 border-blue-400 max-w-7xl"
>
	<picture class="grid">
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid justify-start px-5 text-2xl font-light text-white duration-500 md:text-4xl md:pl-20 py-10 md:py-0 place-content-center"
		>
			<h1>Custom-built software to</h1>
			<h2>
				&lt;<span class="font-normal text-blue-500">Empower your Success.</span>/>
			</h2>
			<br />
			<LetsTalkButton />
		</div>
		<source
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full"
			media="(min-width: 768px)"
			srcset="/images/hero_2.jpeg"
			style="aspect-ratio: 75/34;"
		/>
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full"
			alt="Staffing Innovation Hero"
			src="/images/hero.jpeg"
			style="aspect-ratio: 75/34;"
		/>
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%);
	}
</style>
