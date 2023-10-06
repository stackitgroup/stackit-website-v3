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

	<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
		<button
			class="text-2xl h-14 text-white rounded-full px-5 bg-[#016fce] outline-none flex items-center justify-center gap-2 w-44"
		>
			Let's Talk

			<Icon data={arrowRight} />
		</button>
	</a>
</section>
<!-- Who we are -->
<section class="bg-white min-h-[70vh] flex py-10 px-28 gap-10">
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
<!-- Staffing Innovation -->
<section class="bg-white min-h-[70vh] flex py-10 px-28 gap-10">
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
<!-- Why we excel. Why us -->
<section class="bg-[#f2f2f2] min-h-[85vh] flex px-28 gap-10 py-10">
	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-3">
			<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
			<h2 class="text-4xl font-bold text-black">Why we excel. Why us.</h2>
		</div>
		<br />
		<div class="pr-10 text-2xl text-blak">
			<ol class="items-center px-20 sm:flex">
				<li class="relative flex flex-col w-1/3 gap-16 mb-6 h-72 sm:mb-0">
					<div class="flex items-center justify-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
						>
							1
						</div>
						<div class="absolute left-44 hidden sm:flex w-full bg-gray-400 h-0.5" />
					</div>
					<div class="flex flex-col items-center mt-3">
						<h3 class="text-3xl font-semibold text-black">Expertise</h3>
						<p class="font-normal text-center text-black">
							We leverage our deep knowledge of the LATAM tech industry to connect you with the
							region's top talent.
						</p>
					</div>
				</li>

				<li class="relative flex flex-col w-1/3 gap-16 mb-6 h-72 sm:mb-0">
					<div class="flex items-center justify-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
						>
							2
						</div>
						<!-- <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" /> -->
					</div>
					<div class="flex flex-col items-center mt-3">
						<h3 class="text-3xl font-semibold text-black">Quality</h3>
						<p class="font-normal text-center text-black">
							Our veteran tech and HR team upholds rigorous vetting procedures, ensuring each
							candidate we place is a perfect technical and cultural fit.
						</p>
					</div>
				</li>
				<li class="relative flex flex-col w-1/3 gap-16 mb-6 h-72 sm:mb-0">
					<div class="flex items-center justify-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
						>
							3
						</div>
						<div class="absolute right-44 hidden sm:flex w-full bg-gray-400 h-0.5" />
					</div>
					<div class="flex flex-col items-center mt-3">
						<h3 class="text-3xl font-semibold text-black">Consistency</h3>
						<p class="font-normal text-center text-black">
							We continually coach our professionals while maintaining close collaboration with your
							organization. Sustaining the highest quality is our priority.
						</p>
					</div>
				</li>
			</ol>
		</div>
	</div>
</section>
<!-- How to work together -->
<section class="bg-white min-h-[70vh] flex py-10 px-28 gap-10 flex-col">
	<div class="flex items-center gap-3">
		<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
		<h2 class="text-4xl font-bold text-black">How to Work Together</h2>
	</div>

	<div class="flex flex-col w-full gap-5">
		<!-- Discovery Card -->
		<div
			class="self-end flex w-4/5 justify-between text-black border-[2.5px] border-black rounded-3xl items-center h-56 relative"
		>
			<div class="flex flex-col items-start h-full pt-5 pl-5 border">
				<h1 class="font-medium">Discovery</h1>
				<p class="w-4/5 text-xl">
					We connect with you to understand your unique project requirements and the specific skills
					you need.
				</p>
			</div>
			<picture
				class="h-56 w-56 bg-white m-[-4px] border-[2.5px] border-black rounded-full absolute -right-20 overflow-hidden"
			>
				<img class="object-contain w-56 h-56 p-5" src="/images/step1.png" alt="Discovery" />
			</picture>
		</div>
		<!-- Selection Card -->
		<div
			class="self-center flex w-4/5 justify-between text-black border-[2.5px] border-black rounded-3xl items-center h-56 relative"
		>
			<div class="flex flex-col items-start h-full pt-5 pl-5 border">
				<h1 class="font-medium">Selection</h1>
				<p class="w-4/5 text-xl">
					We handpick the perfect candidates from our pool of skilled Latin American Developers
					based on your requirements.
				</p>
			</div>
			<picture
				class="h-56 w-56 bg-white m-[-4px] border-[2.5px] border-black rounded-full absolute -right-20 overflow-hidden"
			>
				<img class="object-contain w-56 h-56 p-5" src="/images/step1.png" alt="Selection" />
			</picture>
		</div>
		<!-- Integration -->
		<div
			class=" flex w-4/5 justify-between text-black border-[2.5px] border-black rounded-3xl items-center h-56 relative"
		>
			<div class="flex flex-col items-start h-full pt-5 pl-5 border">
				<h1 class="font-medium">Integration</h1>
				<p class="w-4/5 text-xl">
					We ensure seamless integration of the selected developers into your team, driving
					successful outcomes and bringing value to your projects.
				</p>
			</div>
			<picture
				class="h-56 w-56 bg-white m-[-4px] border-[2.5px] border-black rounded-full absolute -right-20 overflow-hidden"
			>
				<img class="object-contain w-56 h-56 p-5" src="/images/step3.png" alt="Integration" />
			</picture>
		</div>
	</div>
</section>
<!-- Some of our Clients -->
<section class="bg-white min-h-[40vh] flex py-10 px-28 gap-10 flex-col">
	<div class="flex items-center gap-3">
		<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
		<h2 class="text-4xl font-bold text-black">Some of our Clients</h2>
	</div>

	<div class="flex items-center w-full gap-3">
		<picture>
			<img class="w-full h-16" src="/images/fuelzee.png" alt="Fuelzee" />
		</picture>
		<picture>
			<img class="w-full h-28" src="/images/buscape.png" alt="Buscape" />
		</picture>
		<picture>
			<img class="w-full h-16" src="/images/siemens.png" alt="Siemens" />
		</picture>
		<picture>
			<img class="w-full h-16" src="/images/toyota.png" alt="Toyota" />
		</picture>
		<picture>
			<img class="w-full h-16" src="/images/boeing.png" alt="Boeing" />
		</picture>
		<picture>
			<img class="w-full h-16" src="/images/bridgepoint.png" alt="Bridgepoint" />
		</picture>
	</div>
</section>
<!-- The result?  -->
<section class="bg-[#f2f2f2] min-h-[30vh] flex py-10 px-28 gap-10 items-center">
	<div class="flex items-center gap-3">
		<h2 class="text-4xl font-bold text-black">
			The result? Top-tier professionals with the skillset to build you nothing but the best
			software.
		</h2>
	</div>

	<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
		<button
			class="text-2xl h-14 text-white rounded-full px-5 bg-[#016fce] outline-none flex items-center justify-center gap-2 w-44"
		>
			Let's Talk

			<Icon data={arrowRight} />
		</button>
	</a>
</section>
