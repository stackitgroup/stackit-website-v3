<script>
	import BuildYourIdea from './build-your-idea.svelte';
	import BuildYourTeam from './build-your-team.svelte';
	import Showcase from './showcase.svelte';
</script>

<section class="flex flex-col w-full py-[5%]">
	<div class="mx-auto max-w-[1730px] w-full">
		<section class="flex flex-col items-center justify-center gap-5 py-[5%]">
			<h2 class="text-3xl font-light md:col-span-1 md:text-5xl">Let's shape your future</h2>
			<Showcase />
		</section>

		<div class="grid grid-cols-6 px-[5%] py-[5%] gap-10">
			<BuildYourIdea />
			<BuildYourTeam />
		</div>
	</div>
</section>
