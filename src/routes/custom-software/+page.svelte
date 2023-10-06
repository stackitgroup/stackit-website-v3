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
	<p class="text-5xl">Custom-built software. Empowering your Success.</p>

	<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
		<button
			class="text-2xl h-14 text-white rounded-full px-5 bg-[#016fce] outline-none flex items-center justify-center gap-2 w-44"
		>
			Let's Talk

			<Icon data={arrowRight} />
		</button>
	</a>
</section>
<!-- Software Development -->
<section class="bg-white min-h-[70vh] flex py-10 px-28 gap-10">
	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-3">
			<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
			<h2 class="text-4xl font-bold text-black">Software Development</h2>
		</div>
		<br />
		<div class="text-2xl text-blak">
			<p>
				Stack IT is your partner in digital transformation. With extensive experience in
				cutting-edge technologies, including blockchain and AI, we develop innovative mobile and web
				applications.
			</p>
			<br />
			<p>
				Our expertise and agile approach enable us to deliver solutions that transform your
				operations. If you envision it, we can build it.
			</p>
		</div>
	</div>

	<div>
		<img src="/images/custom_software_development.png" alt="" />
	</div>
</section>
<!-- Maintenance & Support -->
<section class="bg-white min-h-[70vh] flex py-10 px-28 gap-10">
	<div>
		<img src="/images/who_we_are.png" alt="" />
	</div>

	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-3">
			<img class="w-12 h-12 object-fit" src="/images/maintenance.png" alt="" />
			<h2 class="text-4xl font-bold text-black">Maintenance & Support</h2>
		</div>
		<br />
		<div class="pr-10 text-2xl text-blak">
			<p>
				We don’t just create; we care. Stack IT offers ongoing maintenance and support encompassing
				enhancements, bug fixes, and system monitoring.
			</p>
			<br />
			<p>
				We continually assess your software's usability, audit your code, and test your cloud
				infrastructure, providing insightful advice that informs your business decisions.
			</p>
		</div>
	</div>
</section>
<!-- Consulting -->
<section class="bg-white min-h-[70vh] flex py-10 px-28 gap-10">
	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-3">
			<img class="w-12 h-12 object-fit" src="/images/custom_consulting.png" alt="" />
			<h2 class="text-4xl font-bold text-black">Consulting</h2>
		</div>
		<br />
		<div class="text-2xl text-blak">
			<p>
				Our tech consulting services bring a fresh perspective to your existing software
				functionality. We meticulously review your code, test your cloud infrastructure, and provide
				expert advice that supports your strategic business decisions.
			</p>
		</div>
	</div>

	<div>
		<img src="/images/custom_software_development.png" alt="" />
	</div>
</section>
<!-- Why we excel. Why us -->
<section class="bg-[#f2f2f2] min-h-[95vh] flex px-28 gap-10 py-10">
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
						<h3 class="text-3xl font-semibold text-black">Partnership</h3>
						<p class="font-normal text-center text-black">
							We're your partners in success. At Stack IT, our primary aim is to maximize the value
							we bring to our clients. We take pride in creating, managing, and delivering products
							that aren't just high-quality, but also impactful.
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
							Our culture is one of individual excellence, team synergy, and structured process. We
							invest in meticulous hiring practices, proactive team coaching, and foster an
							environment that values creativity, teamwork, and accountability.
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
						<h3 class="text-3xl font-semibold text-black">Expertise</h3>
						<p class="font-normal text-center text-black">
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
<section class="bg-white min-h-[70vh] flex py-10 px-28 gap-10 flex-col">
	<div class="flex items-center gap-3">
		<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
		<h2 class="text-4xl font-bold text-black">How to Work Together</h2>
	</div>

	<div class="flex flex-col w-full gap-5">
		<!-- Listen Card -->
		<div
			class="self-end flex w-4/5 justify-between text-black border-[2.5px] border-black rounded-3xl items-center h-56 relative"
		>
			<div class="flex flex-col items-start h-full pt-5 pl-5 border">
				<h1 class="font-medium">Listen</h1>
				<p class="w-4/5 text-xl">
					We pay careful attention to your business goals, using this understanding to gauge project
					complexity and size accurately.
				</p>
			</div>
			<picture
				class="h-56 w-56 bg-white m-[-4px] border-[2.5px] border-black rounded-full absolute -right-20 overflow-hidden"
			>
				<img class="object-contain w-56 h-56 p-5" src="/images/listen.png" alt="Discovery" />
			</picture>
		</div>
		<!-- Plan Card -->
		<div
			class="self-center flex w-4/5 justify-between text-black border-[2.5px] border-black rounded-3xl items-center h-56 relative"
		>
			<div class="flex flex-col items-start h-full pt-5 pl-5 border">
				<h1 class="font-medium">Plan</h1>
				<p class="w-4/5 text-xl">
					Armed with your vision and our expertise, we craft a comprehensive plan of action. This
					includes projected timelines for feature and functionality delivery, fostering an
					environment of agile teams, and functional results.
				</p>
			</div>
			<picture
				class="h-56 w-56 bg-white m-[-4px] border-[2.5px] border-black rounded-full absolute -right-20 overflow-hidden"
			>
				<img class="object-contain w-56 h-56 p-5" src="/images/plan.png" alt="Selection" />
			</picture>
		</div>
		<!-- Succeed -->
		<div
			class=" flex w-4/5 justify-between text-black border-[2.5px] border-black rounded-3xl items-center h-56 relative"
		>
			<div class="flex flex-col items-start h-full pt-5 pl-5 border">
				<h1 class="font-medium">Succeed</h1>
				<p class="w-4/5 text-xl">
					We don't just deliver code; we deliver success, neatly packaged and ready to integrate
					seamlessly into your business. Let’s talk! Discover how Stack IT can drive your digital
					transformation.
				</p>
			</div>
			<picture
				class="h-56 w-56 bg-white m-[-4px] border-[2.5px] border-black rounded-full absolute -right-20 overflow-hidden"
			>
				<img class="object-contain w-56 h-56 p-5" src="/images/succeed.png" alt="Integration" />
			</picture>
		</div>
	</div>
</section>
<!-- The result?  -->
<section class="bg-[#f2f2f2] min-h-[30vh] flex py-10 px-28 gap-10 items-center">
	<div class="flex items-center gap-3">
		<h2 class="text-4xl font-bold text-black">
			The result? A solid custom software solution for your business.
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
