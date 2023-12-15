<script>
	import LetsTalkButton from '../../../components/lets-talk-button.svelte';
</script>

<section id="hero" class="w-full mx-auto border-b-2 border-blue-400 h-96 max-w-[1730px]">
	<picture class="grid h-96">
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid justify-start px-5 text-2xl font-light text-white duration-500 md:text-5xl md:pl-20 py-10 md:py-0 place-content-center"
		>
			<h1>Custom-built software to</h1>
			<h2>
				&lt;<span class="font-normal text-[--blue]">Empower your Success.</span>/>
			</h2>
			<br />
			<LetsTalkButton />
		</div>
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-96"
			alt="Staffing Innovation Hero"
			src="/images/custom-software-hero.jpeg"
			style="aspect-ratio: 75/34;"
		/>
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%);
	}
</style>
