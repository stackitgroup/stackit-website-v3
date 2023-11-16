<script>
	import LetsTalkButton from '../../../components/lets-talk-button.svelte';
</script>

<section class="mx-auto max-w-7xl" title="The result Section">
	<picture class="relative">
		<div class="absolute w-full h-full overlay" />
		<div
			class="absolute grid justify-start w-full h-full gap-5 px-5 font-light md:w-4/5 md:pl-20 place-content-center"
		>
			<h2 class="text-3xl font-medium text-blue-500 md:text-5xl">The result</h2>
			<h3 class="text-xl text-gray-200 md:text-2xl">
				Top-tier professionals with the skillset to build you nothing but the best software.
			</h3>

			<LetsTalkButton />
		</div>
		<source
			class="object-cover w-full h-80"
			media="(min-width: 768px)"
			srcset="/images/the_result.jpeg"
		/>
		<img class="object-cover w-full h-80" alt="who_we_are" src="/images/the_result.jpeg" />
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(113deg, rgba(3, 21, 35, 0.8) 55.9%, rgba(1, 111, 206, 0.2) 87.95%);
	}
</style>
