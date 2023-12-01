<script>
	import { Icon } from 'svelte-awesome';
	import locationArrow from 'svelte-awesome/icons/locationArrow';

	const Cards = [
		{
			title: 'LEDA - NFT Marketplace',
			technologies: 'Solidity, Nest.js, Next.js, Hardhat, Redux, TypeScript, esLint, Prettier.',
			location: 'AUSTRALIA',
			contractedService: 'Customer Software Solution',
			image: '/images/case-studies/leda_logo.webp',
			link: 'https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it'
		},
		{
			title: 'DefiSpot',
			technologies:
				'React.js, Redux, SASS, Jest, TypeScript, xchainjs, Chart.js, Ethers.js, esLint, Prettier.',
			location: 'NORWAY',
			contractedService: 'Customer Software Solution',
			image: '/images/case-studies/defispot_logo.svg',
			link: 'https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it'
		},
		{
			title: 'Metis Messenger',
			technologies: 'React Native, React.js, Redux, Material UI.',
			location: 'UNITED STATES',
			contractedService: 'Customer Software Solution',
			image: '/images/case-studies/metis_logo.svg',
			link: 'https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it'
		}
	];
</script>

<svelte:head>
	<title>Case Study | Stack IT</title>
</svelte:head>

<section id="how-to-work-together" class="w-full p-[5%]" title="How to work together Section">
	<div class="grid grid-cols-3 mx-auto w-full max-w-[1730px] gap-5">
		<header class="col-span-3 px-5 2xl:px-0 md:text-5xl pb-[5%] grid gap-5">
			<h2>Our Work</h2>
			<span class="pl-5 text-xl text-gray-500">
				Here's a snapshot of our past successes and the tools we use to deliver exceptional
				services.
			</span>
		</header>

		{#each Cards as e}
			<article title={e.title} class="grid col-span-3 md:col-span-1">
				<div
					class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-between font-normal text-gray-200"
				>
					<header>
						<h3 class="text-2xl text-[var(--blue)] relative">{e.title}</h3>
						<small>
							Technologies: {e.technologies}
						</small>
					</header>
					<img class="object-contain h-52" src={e.image} alt="" />
					<footer>
						<header>
							<Icon class="text-white rounded-sm p-[1px] w-7 h-7" data={locationArrow} scale={2} />
							{e.location}
						</header>
						<p>
							Contracted Service:
							<span class="text-[var(--blue)]">{e.contractedService}</span>
						</p>
						<br />
						<a
							class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-44 bg-[#016fce] transition-colors duration-400"
							href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it"
						>
							View Case Study
							<img src="/icons/arrow.svg" class="w-3 rotate-90" alt="arrow to scroll up" />
						</a>
					</footer>
				</div>

				<!-- Background -->
				<div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay rounded-xl" />
				<img
					class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2] rounded-xl"
					alt="who_we_are"
					src="/images/how-to-work-together-discovery.png"
				/>
			</article>
		{/each}
	</div>
</section>

<style>
	.overlay {
		background: linear-gradient(
			137deg,
			rgba(3, 21, 35, 0.76) 54.87%,
			rgba(1, 111, 206, 0.2) 101.73%
		);
	}

	picture:nth-of-type(1) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 10%;
	}
	picture:nth-of-type(2) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 15%;
	}
	picture:nth-of-type(3) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 25%;
	}

	@keyframes slideInFromLeft {
		0% {
			transform: translateY(100%);
			scale: 0.5;
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			scale: 1;
			opacity: 1;
		}
	}
</style>
