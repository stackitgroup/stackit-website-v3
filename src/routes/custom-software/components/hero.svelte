<script>
	import LetsTalkButton from '../../../components/lets-talk-button.svelte';
</script>

<section id="hero" title="Hero Section" class="w-full mx-auto border-b-2 border-blue-400 max-w-7xl">
	<picture class="relative h-72 md:h-96">
		<div class="absolute w-full h-72 md:h-96 overlay" />
		<div
			class="absolute grid justify-start w-full px-5 text-2xl font-light text-white md:text-4xl md:pl-20 h-72 md:h-96 place-content-center"
		>
			<h1>Custom-built software with</h1>
			<h2>
				&lt;<span class="font-normal text-blue-500">Empowering your Success.</span>/>
			</h2>
			<br />
			<LetsTalkButton />
		</div>
		<source class="w-full h-72 md:h-96" media="(min-width: 768px)" srcset="/images/hero_2.jpeg" />
		<img
			class="object-cover w-full h-72 md:h-96"
			alt="Staffing Innovation Hero"
			src="/images/hero.jpeg"
		/>
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%);
	}
</style>
