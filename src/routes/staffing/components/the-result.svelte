<script>
	import LetsTalkButton from '../../../components/lets-talk-button.svelte';
</script>

<section class="pt-16 mx-auto max-w-[1730px]" title="The result Section">
	<picture class="grid">
		<div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay" />
		<div
			class="[grid-row:1/2] z-20 [grid-column:1/2] grid justify-start gap-5 px-5 font-light md:w-4/5 md:pl-20 place-content-center"
		>
			<h2 class="text-3xl font-medium text-blue-500 md:text-5xl">The result</h2>
			<h3 class="text-xl text-gray-200 md:text-2xl">
				Top-tier professionals with the skillset to build you nothing but the best software.
			</h3>

			<LetsTalkButton />
		</div>
		<img
			class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-auto max-h-[600px]"
			alt="who_we_are"
			src="/images/the_result.jpeg"
		/>
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(113deg, rgba(3, 21, 35, 0.8) 55.9%, rgba(1, 111, 206, 0.2) 87.95%);
	}
</style>
