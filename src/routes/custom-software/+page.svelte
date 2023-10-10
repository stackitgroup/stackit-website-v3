<script>
	import Icon from 'svelte-awesome';
	import arrowRight from 'svelte-awesome/icons/arrowRight';
</script>

<svelte:head>
	<title>Stack IT</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="bg-[#283c4d] w-full">
	<div
		class="h-auto w-full max-w-[1200px] mx-auto pt-[25%] sm:pt-[15%] lg:pt-[10%] px-[15%] pb-[7%] text-white flex flex-col gap-6 items-center justify-center text-center"
	>
		<p class="text-3xl lg:text-5xl">Custom-built software. Empowering your Success.</p>

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
<!-- Software Development -->
<section class="bg-white w-full">
	<div class="flex flex-col justify-between p-[5%] md:p-[3%] gap-2 w-full max-w-[1200px] mx-auto">
		<div
			class="flex flex-col justify-between items-center md:flex-row sm:items-start gap-5 md:gap-0"
		>
			<div class="flex flex-col gap-2 w-full md:w-3/5">
				<div class="flex items-center gap-3 mb-5">
					<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
					<h2 class="text-4xl font-bold">Software Development</h2>
				</div>
				<div class="text-md sm:text-xl">
					<p>
						<span class="font-semibold text-[var(--blue)]">Stack IT </span>is your partner in
						digital transformation. With extensive experience in cutting-edge technologies,
						including blockchain and AI, we develop innovative mobile, and web applications.
					</p>
					<br />
					<p>
						Our expertise and agile approach enable us to deliver solutions that transform your
						operations. <span class="font-semibold text-[var(--blue)]"
							>If you envision it, we can build it.</span
						>
					</p>
				</div>
			</div>
			<div
				class="h-full w-[80%] sm:w-2/5 max-h-[260px] max-w-[260px] md:max-h-[380px] md:max-w-[380px] mx-auto"
			>
				<img alt="who_we_are" class="h-full w-full" src="/images/custom_software_development.png" />
			</div>
		</div>
	</div>
</section>
<!-- Maintenance & Support -->
<section class="bg-white flex flex-col w-full">
	<div
		class="flex flex-col-reverse md:flex-row justify-between p-[5%] md:p-[3%] gap-5 w-full max-w-[1200px] mx-auto"
	>
		<div
			class="w-full sm:w-2/5 max-h-[260px] max-w-[260px] md:max-h-[380px] md:max-w-[380px] mx-auto"
		>
			<img src="/images/maintenance.png" alt="" />
		</div>

		<div class="flex flex-col gap-2 w-full md:w-3/5 sm:pl-5">
			<div class="flex items-center gap-3 w-full mb-5">
				<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
				<h2 class="text-4xl font-bold">Maintenance & Support</h2>
			</div>
			<div class="pr-10 text-md sm:text-xl">
				<p>
					<span class="text-[var(--blue)] font-semibold">We don’t just create; we care</span>. Stack
					IT offers ongoing maintenance and support encompassing enhancements, bug fixes, and system
					monitoring.
				</p>
				<br />
				<p>
					We continually assess your software's usability, audit your code, and test your cloud
					infrastructure, providing <span class="text-[var(--blue)] font-semibold"
						>insightful advice</span
					> that informs your business decisions.
				</p>
			</div>
		</div>
	</div>
</section>
<!-- Consulting -->
<section class="bg-white w-full">
	<div class="flex flex-col justify-between p-[5%] md:p-[3%] gap-2 w-full max-w-[1200px] mx-auto">
		<div
			class="flex flex-col justify-between items-center md:flex-row sm:items-start gap-5 md:gap-0"
		>
			<div class="flex flex-col gap-2 w-full md:w-3/5">
				<div class="flex items-center gap-3 mb-5">
					<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
					<h2 class="text-4xl font-bold">Consulting</h2>
				</div>
				<div class="text-md sm:text-xl">
					<p>
						Our tech consulting services <span class="text-[var(--blue)] font-semibold"
							>bring a fresh perspective</span
						> to your existing software functionality. We meticulously review your code, test your cloud
						infrastructure, and provide expert advice that supports your strategic business decisions.
					</p>
				</div>
			</div>
			<div
				class="h-full w-[80%] sm:w-2/5 max-h-[260px] max-w-[260px] md:max-h-[380px] md:max-w-[380px] mx-auto"
			>
				<img alt="who_we_are" class="h-full w-full" src="/images/custom_consulting.png" />
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
				<li class="relative flex flex-col w-full md:w-1/3 gap-5 sm:mb-0 px-[1%] justify-start">
					<div class="flex items-center justify-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 bg-[#016fce] p-7 text-white rounded-full shrink-0"
						>
							1
						</div>
						<div class="absolute left-44 hidden md:flex w-full bg-gray-400 h-0.5" />
					</div>
					<div class="flex flex-col items-center gap-3">
						<h3 class="text-3xl font-semibold">Partnership</h3>
						<p class="text-lg text-center">
							We're your partners in success. At Stack IT, our primary aim is to maximize the value
							we bring to our clients. We take pride in creating, managing, and delivering products
							that aren't just high-quality, but also impactful.
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
							Our culture is one of individual excellence, team synergy, and structured process. We
							invest in meticulous hiring practices, proactive team coaching, and foster an
							environment that values creativity, teamwork, and accountability.
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
						<h3 class="text-3xl font-semibold">Expertise</h3>
						<p class="text-lg text-center">
							Project roadblocks are inevitable. Regardless of the issue, it takes an expert team to
							keep things on track. With years of industry wisdom, and unwavering determination,
							we're the team to call when the going gets tough.
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
			<!-- Listen Card -->
			<div
				class="flex flex-col md:flex-row h-auto md:h-[220px] w-full md:w-4/5 justify-between md:border-[2px] border-[var(--black)] rounded-3xl items-center px-[3%] py-[2%] relative gap-10 md:gap-0"
			>
				<div class="flex flex-col w-full md:w-[80%] gap-2 text-center md:text-start">
					<h3 class="text-2xl font-semibold">Listen</h3>
					<p class="text-xl">
						We pay <span class="text-[var(--blue)] font-semibold"
							>careful attention to your business goals</span
						>, using this understanding to gauge project complexity and size accurately.
					</p>
				</div>
				<picture
					class="flex items-center justify-center h-[220px] w-[220px] bg-white mx-auto md:mx-0 border-[2px] border-[var(--black)] rounded-full overflow-hidden md:absolute md:right-[-80px]"
				>
					<img class="object-contain h-[80%] w-[80%]" src="/images/listen.png" alt="Discovery" />
				</picture>
			</div>

			<!-- Plan Card -->
			<div
				class="md:ml-[calc(5%)] flex flex-col md:flex-row h-auto md:h-[220px] w-full md:w-4/5 justify-between md:border-[2px] border-[var(--black)] rounded-3xl items-center px-[3%] py-[2%] relative gap-10 md:gap-0"
			>
				<div class="flex flex-col w-full md:w-[80%] gap-2 text-center md:text-start">
					<h3 class="text-2xl font-semibold">Plan</h3>
					<p class="text-xl">
						Armed with your vision and our expertise, <span class="text-[var(--blue)] font-semibold"
							>we craft a comprehensive plan of action</span
						>. This includes projected timelines for feature and functionality delivery, fostering
						an environment of agile teams, and functional results.
					</p>
				</div>
				<picture
					class="flex items-center justify-center h-[220px] w-[220px] bg-white mx-auto md:mx-0 border-[2px] border-[var(--black)] rounded-full overflow-hidden md:absolute md:right-[-80px]"
				>
					<img class="object-contain h-[80%] w-[80%]" src="/images/step2.png" alt="Selection" />
				</picture>
			</div>
			<!-- Succeed card -->
			<div
				class="md:ml-[calc(10%)] flex flex-col md:flex-row h-auto md:h-[220px] w-full md:w-4/5 justify-between md:border-[2px] border-[var(--black)] rounded-3xl items-center px-[3%] py-[2%] relative gap-10 md:gap-0"
			>
				<div class="flex flex-col w-full md:w-[80%] gap-2 text-center md:text-start">
					<h3 class="text-2xl font-semibold">Succeed</h3>
					<p class="text-xl">
						We don't just deliver code; <span class="text-[var(--blue)] font-semibold"
							>we deliver success</span
						>, neatly packaged and ready to integrate seamlessly into your business.
						<a
							href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it"
							class="text-[var(--blue)] font-semibold underline">Let’s talk</a
						>! Discover how Stack IT can drive your digital transformation.
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
<!-- The result?  -->
<section class="bg-[#f2f2f2] h-auto">
	<div class="flex flex-col md:flex-row w-full max-w-[1200px] p-[5%] mx-auto gap-10 items-center">
		<div class="flex items-center gap-3">
			<p class="text-2xl md:text-4xl text-center md:text-start font-bold">
				The result? A solid custom software solution for your business.
			</p>
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
