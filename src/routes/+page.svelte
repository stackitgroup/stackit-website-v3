<script>
	import Icon from 'svelte-awesome';
	import arrowRight from 'svelte-awesome/icons/arrowRight';
</script>

<svelte:head>
	<title>Stackit</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="flex flex-col h-full mx-auto">
	<section class="bg-[#283c4d] w-full">
		<div
			class="h-auto w-full max-w-[1200px] mx-auto pt-[25%] sm:pt-[15%] lg:pt-[10%] px-[15%] pb-[7%] text-white flex flex-col gap-6 items-center justify-center text-center"
		>
			<p class="text-3xl lg:text-5xl">
				Staffing Innovation Worldwide with Latin America Software Talent.
			</p>

			<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
				<button
					class="text-2xl h-14 rounded-full px-5 bg-[#016fce] outline-none flex items-center justify-center gap-2 w-44"
				>
					Let's Talk

					<Icon data={arrowRight} />
				</button>
			</a>
		</div>
	</section>
	<!-- Who we are -->
	<section class="bg-white w-full">
		<div class="flex flex-col justify-between p-[5%] md:p-[3%] gap-2 w-full max-w-[1200px] mx-auto">
			<div
				class="flex flex-col justify-between items-center md:flex-row sm:items-start gap-5 md:gap-0"
			>
				<div class="flex flex-col gap-2 w-full md:w-3/5">
					<div class="flex items-center gap-3 mb-5">
						<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
						<h2 class="text-4xl font-bold">Who we are</h2>
					</div>
					<div class="text-md sm:text-xl">
						<p>
							At Stack IT, a San Diego, CA-based company, we believe that talent drives success.
							Since 2017, we've connected companies with top tech professionals from Latin America
							for cost-effective, flexible, and productive remote staffing solutions.
						</p>
						<br />
						<p>
							Our motto is “Success. Coded.” because our part in your success is to deliver the
							perfect technical figure you need
						</p>
					</div>
				</div>
				<div
					class="h-full w-[80%] sm:w-2/5 max-h-[260px] max-w-[260px] md:max-h-[380px] md:max-w-[380px] mx-auto"
				>
					<img alt="who_we_are" class="h-full w-full" src="/images/who_we_are.png" />
				</div>
			</div>
		</div>
	</section>
	<!-- Staffing Innovation -->
	<section class="bg-white flex flex-col w-full">
		<div
			class="flex flex-col-reverse md:flex-row justify-between p-[5%] md:p-[3%] gap-5 w-full max-w-[1200px] mx-auto"
		>
			<div
				class="w-full sm:w-2/5 max-h-[260px] max-w-[260px] md:max-h-[380px] md:max-w-[380px] mx-auto"
			>
				<img src="/images/who_we_are.png" alt="" />
			</div>

			<div class="flex flex-col gap-2 w-full md:w-3/5 sm:pl-5">
				<div class="flex items-center gap-3 w-full mb-5">
					<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
					<h2 class="text-4xl font-bold">Staffing Innovation</h2>
				</div>
				<div class="pr-10 text-md sm:text-xl">
					<p>
						Our full-stack staffing solution is designed to deliver <span
							class="text-[var(--blue)] font-semibold"
							>top-tier
						</span>software developers and help push your business to new heights.
					</p>
					<br />
					<p>
						With a meticulous selection process, tailored training, and keen evaluation, we handpick
						the perfect <span class="text-[var(--blue)] font-semibold">
							talent to match your requirements</span
						>, industry, and technological demands.
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- Why we excel. Why us -->
	<section class="bg-[#f2f2f2] flex w-full">
		<div class="flex flex-col gap-10 max-w-[1200px] mx-auto p-[5%] pb-[8%] md:p-[3%]md:pb-[7%]">
			<div class="flex items-center gap-3">
				<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
				<h2 class="text-4xl font-bold">Why we excel. Why us.</h2>
			</div>
			<div class="text-2xl">
				<ol class="flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
					<li
						class="relative flex flex-col w-full md:w-1/3 gap-5 sm:mb-0 px-[1%] lg:px-[5%] justify-start"
					>
						<div class="flex items-center justify-center">
							<div
								class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
							>
								1
							</div>
							<div class="absolute left-44 hidden md:flex w-full bg-gray-400 h-0.5" />
						</div>
						<div class="flex flex-col items-center gap-3">
							<h3 class="text-3xl font-semibold">Expertise</h3>
							<p class="text-lg text-center">
								We leverage our deep knowledge of the LATAM tech industry to connect you with the
								region's top talent.
							</p>
						</div>
					</li>

					<li class="relative flex flex-col w-full md:w-1/3 px-[1%] gap-5 sm:mb-0">
						<div class="flex items-center justify-center">
							<div
								class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
							>
								2
							</div>
						</div>
						<div class="flex flex-col items-center gap-3">
							<h3 class="text-3xl font-semibold">Quality</h3>
							<p class="text-lg text-center">
								Our veteran tech and HR team upholds rigorous vetting procedures, ensuring each
								candidate we place is a perfect technical and cultural fit.
							</p>
						</div>
					</li>
					<li class="relative flex flex-col w-full md:w-1/3 px-[1%] gap-5 sm:mb-0">
						<div class="flex items-center justify-center">
							<div
								class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
							>
								3
							</div>
							<div class="absolute right-44 hidden md:flex w-full bg-gray-400 h-0.5" />
						</div>
						<div class="flex flex-col items-center">
							<h3 class="text-3xl font-semibold">Consistency</h3>
							<p class="text-lg text-center">
								We continually coach our professionals while maintaining close collaboration with
								your organization. Sustaining the highest quality is our priority.
							</p>
						</div>
					</li>
				</ol>
			</div>
		</div>
	</section>
	<!-- How to work together -->
	<section class="bg-white w-full h-auto">
		<div class="flex flex-col w-full max-w-[1200px] mx-auto gap-10 p-[5%] md:p-[3%]">
			<div class="flex items-center gap-3">
				<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
				<h2 class="text-4xl font-bold">How to Work Together</h2>
			</div>

			<div class="flex flex-col w-full gap-5">
				<!-- Discovery Card -->
				<div
					class="flex flex-col md:flex-row h-auto md:h-[220px] w-full md:w-4/5 justify-between md:border-[2px] border-[var(--black)] rounded-3xl items-center px-[3%] py-[2%] relative gap-10 md:gap-0"
				>
					<div class="flex flex-col w-full md:w-[80%] gap-2 text-center md:text-start">
						<h3 class="text-2xl font-semibold">Discovery</h3>
						<p class="text-xl">
							We connect with you to understand your unique project requirements and the specific
							skills you need.
						</p>
					</div>
					<picture
						class="flex items-center justify-center h-[220px] w-[220px] bg-white mx-auto md:mx-0 border-[2px] border-[var(--black)] rounded-full overflow-hidden md:absolute md:right-[-80px]"
					>
						<img class="object-contain h-[80%] w-[80%]" src="/images/step1.png" alt="Discovery" />
					</picture>
				</div>

				<!-- Selection Card -->
				<div
					class="md:ml-[calc(5%)] flex flex-col md:flex-row h-auto md:h-[220px] w-full md:w-4/5 justify-between md:border-[2px] border-[var(--black)] rounded-3xl items-center px-[3%] py-[2%] relative gap-10 md:gap-0"
				>
					<div class="flex flex-col w-full md:w-[80%] gap-2 text-center md:text-start">
						<h3 class="text-2xl font-semibold">Selection</h3>
						<p class="text-xl">
							We handpick the perfect candidates from our pool of skilled Latin American Developers
							based on your requirements.
						</p>
					</div>
					<picture
						class="flex items-center justify-center h-[220px] w-[220px] bg-white mx-auto md:mx-0 border-[2px] border-[var(--black)] rounded-full overflow-hidden md:absolute md:right-[-80px]"
					>
						<img class="object-contain h-[80%] w-[80%]" src="/images/step1.png" alt="Selection" />
					</picture>
				</div>
				<!-- Integration -->
				<div
					class="md:ml-[calc(10%)] flex flex-col md:flex-row h-auto md:h-[220px] w-full md:w-4/5 justify-between md:border-[2px] border-[var(--black)] rounded-3xl items-center px-[3%] py-[2%] relative gap-10 md:gap-0"
				>
					<div class="flex flex-col w-full md:w-[80%] gap-2 text-center md:text-start">
						<h3 class="text-2xl font-semibold">Integration</h3>
						<p class="text-xl">
							We ensure seamless integration of the selected developers into your team, driving
							successful outcomes and bringing value to your projects.
						</p>
					</div>
					<picture
						class="flex items-center justify-center h-[220px] w-[220px] bg-white mx-auto md:mx-0 border-[2px] border-[var(--black)] rounded-full overflow-hidden md:absolute md:right-[-80px]"
					>
						<img class="object-contain h-[80%] w-[80%]" src="/images/step3.png" alt="Integration" />
					</picture>
				</div>
			</div>
		</div>
	</section>
	<!-- Some of our Clients -->
	<section class="bg-white h-auto">
		<div class="w-full max-w-[1200px] mx-auto p-[5%] lg:p-[3%] flex flex-col gap-10">
			<div class="flex items-center gap-3">
				<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
				<h2 class="text-4xl font-bold">Some of our Clients</h2>
			</div>

			<div class="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
				<div class="flex items-center justify-center w-full sm:w-3/4 lg:w-1/2">
					<picture class="w-1/3">
						<img class="w-full h-12" src="/images/fuelzee.png" alt="Fuelzee" />
					</picture>
					<picture class="w-1/3">
						<img class="w-full h-28" src="/images/buscape.png" alt="Buscape" />
					</picture>
					<picture class="w-1/3">
						<img class="w-full h-12" src="/images/siemens.png" alt="Siemens" />
					</picture>
				</div>
				<div class="flex items-center justify-center w-full sm:w-3/4 lg:w-1/2">
					<picture class=" w-1/3">
						<img class="w-full h-16" src="/images/toyota.png" alt="Toyota" />
					</picture>
					<picture class="w-1/3">
						<img class="w-full h-20" src="/images/boeing.png" alt="Boeing" />
					</picture>
					<picture class="w-1/3">
						<img class="w-full h-18" src="/images/bridgepoint.png" alt="Bridgepoint" />
					</picture>
				</div>
			</div>
		</div>
	</section>
	<!-- The result?  -->
	<section class="bg-[#f2f2f2] h-auto">
		<div
			class="flex flex-col md:flex-row w-full max-w-[1200px] p-[5%] lg:p-[3%] mx-auto gap-10 items-center"
		>
			<div class="flex items-center gap-3">
				<h2 class="text-2xl md:text-4xl text-center md:text-start font-bold">
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
		</div>
	</section>
</main>
