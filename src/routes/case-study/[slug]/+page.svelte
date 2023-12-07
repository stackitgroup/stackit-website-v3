<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const caseStudy = data.caseStudy;
</script>

<svelte:head>
	<title>{caseStudy.title}</title>
</svelte:head>

<section id={caseStudy.title} title={caseStudy.title} class="w-full p-[5%]">
	<div class="grid grid-cols-1 md:grid-cols-4 gap-10 mx-auto max-w-[1730px]">
		<div class="grid col-span-1 gap-10 md:col-span-3">
			<h2 class="text-4xl font-light md:col-span-1 md:text-6xl md:font-normal">
				{caseStudy.title}
			</h2>

			<picture class="md:w-1/2">
				<img class="object-contain w-full h-full" src={caseStudy.image} alt="" />
			</picture>

			<br class="hidden md:flex" />
			<article class="grid gap-6">
				<h3 class="text-3xl font-light md:text-5xl">Client Overview</h3>
				<p class="text-xl font-light">
					{caseStudy.clientOverview}
				</p>
			</article>

			<article class="grid gap-6">
				<h3 class="text-3xl font-light md:text-5xl">Brief</h3>
				<p class="text-xl font-light">
					{caseStudy.brief}
				</p>
			</article>

			<article class="grid gap-6">
				<h3 class="text-3xl font-light md:text-5xl">Challenge</h3>
				<p class="text-xl font-light">
					{caseStudy.challenge}
				</p>
			</article>

			<article class="grid gap-6">
				<h3 class="text-3xl font-light md:text-5xl">Solution</h3>
				<p class="text-xl font-light">
					{caseStudy.solution}
				</p>
			</article>

			<article class="grid gap-6 p-4 bg-gray-200 border-r border-b border-[--light-blue]">
				<h3 class="text-3xl font-light md:text-5xl">Outcome</h3>
				<p class="text-xl font-light">
					{caseStudy.outcome}
				</p>
			</article>
		</div>

		<div class="grid content-start col-span-1 gap-10 md:col-span-1">
			<article
				class="rounded-xl bg-[--light-blue] text-white grid p-4 gap-4 [&>div>h3]:text-2xl [&>div>p]:text-gray-200"
			>
				<div>
					<h3>Working Model</h3>
					<p>{caseStudy.workingModel}</p>
				</div>
				<div>
					<h3>Region</h3>
					<p>{caseStudy.region}</p>
				</div>
				<div>
					<h3>Sector</h3>
					<p>{caseStudy.sector}</p>
				</div>
			</article>

			<article
				class="rounded-xl bg-[--light-blue] text-white grid p-4 gap-4 [&>div>h3]: [&>div>p]:text-gray-200"
			>
				<h3 class="text-2xl">Tech Stack</h3>
				<ul class="grid gap-2 pl-3">
					{#each caseStudy.techStack as tech}
						<li># {tech}</li>
					{/each}
				</ul>
			</article>
		</div>
	</div>
</section>
