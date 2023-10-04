<script>
	import Icon from 'svelte-awesome';
	import arrowRight from 'svelte-awesome/icons/arrowRight';
</script>

<svelte:head>
	<title>Stackit</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="bg-[#283c4d] min-h-[70vh] text-white flex flex-col gap-6 items-center justify-center text-center px-72"
>
	<p class="text-5xl">Staffing Innovation Worldwide with Latin America Software Talent.</p>
	<a href="/">
		<button
			class="text-2xl text-white rounded-full px-5 py-3 bg-[#016fce] outline-none flex items-center gap-2"
		>
			Let's Talk

			<Icon data={arrowRight} />
		</button>
	</a>
</section>

<section class="bg-white min-h-[70vh] flex pt-5 px-28 gap-10">
	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-3">
			<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
			<h2 class="text-4xl font-bold text-black">Who we are</h2>
		</div>
		<br />
		<div class="text-2xl text-blak">
			<p>
				At Stack IT, a San Diego, CA-based company, we believe that talent drives success. Since
				2017, we've connected companies with top tech professionals from Latin America for
				cost-effective, flexible, and productive remote staffing solutions.
			</p>
			<br />
			<p>
				Our motto is “Success. Coded.” because our part in your success is to deliver the perfect
				technical figure you need
			</p>
		</div>
	</div>

	<div>
		<img src="/images/who_we_are.png" alt="" />
	</div>
</section>

<section class="bg-white min-h-[70vh] flex px-28 gap-10">
	<div>
		<img src="/images/who_we_are.png" alt="" />
	</div>

	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-3">
			<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
			<h2 class="text-4xl font-bold text-black">Staffing Innovation</h2>
		</div>
		<br />
		<div class="pr-10 text-2xl text-blak">
			<p>
				At Stack IT, a San Diego, CA-based company, we believe that talent drives success. Since
				2017, we've connected companies with top tech professionals from Latin America for
				cost-effective, flexible, and productive remote staffing solutions.
			</p>
			<br />
			<p>
				Our motto is “Success. Coded.” because our part in your success is to deliver the perfect
				technical figure you need
			</p>
		</div>
	</div>
</section>

<section class="bg-[#f2f2f2] min-h-[70vh] flex px-28 gap-10 pt-5">
	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-3">
			<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
			<h2 class="text-4xl font-bold text-black">Why we excel. Why us.</h2>
		</div>
		<br />
		<div class="pr-10 text-2xl text-blak px-52">
			<ol class="items-center sm:flex">
				<li class="relative mb-6 sm:mb-0">
					<div class="flex items-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
						>
							1
						</div>
						<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
					</div>
					<div class="mt-3 sm:pr-8">
						<h3 class="text-3xl font-semibold text-black">Expertise</h3>
						<p class="font-normal text-center text-black">
							We leverage our deep knowledge of the LATAM tech industry to connect you with the
							region's top talent.
						</p>
					</div>
				</li>
				<li class="relative mb-6 sm:mb-0">
					<div class="flex items-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
						>
							2
						</div>
						<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
					</div>
					<div class="mt-3 text-black sm:pr-8">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Expertise</h3>
						<time
							class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
							>Released on December 23, 2021</time
						>
						<p class="text-base font-normal text-gray-500 dark:text-gray-400">
							Get started with dozens of web components and interactive elements.
						</p>
					</div>
				</li>
				<li class="relative mb-6 sm:mb-0">
					<div class="flex items-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
						>
							3
						</div>
					</div>
					<div class="mt-3 sm:pr-8">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Flowbite Library v1.3.0
						</h3>
						<time
							class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
							>Released on January 5, 2022</time
						>
						<p class="text-base font-normal text-gray-500 dark:text-gray-400">
							Get started with dozens of web components and interactive elements.
						</p>
					</div>
				</li>
			</ol>
		</div>
	</div>
</section>
