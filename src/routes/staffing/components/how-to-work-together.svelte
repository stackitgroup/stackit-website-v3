<script lang="ts">
	const Cards = [
		{
			title: 'Discovery',
			description:
				'We connect with you to gain a deep understanding of your unique project requirements and the specific skills you need. This phase is crucial for laying a strong foundation for a successful partnership.',
			image: '/images/how-to-work-together-discovery.png'
		},
		{
			title: 'Selection',
			description:
				'With expertise and precision, we handpick the perfect candidates from our pool of skilled Latin American Developers tailored precisely to your requirements. Our thorough vetting ensures that you receive top-tier talent.',
			image: '/images/how-to-work-together-selection.png'
		},
		{
			title: 'Integration',
			description:
				'Seamless integration is the final step. We orchestrate the smooth transition of the selected developers into your team. This collaborative approach drives successful outcomes and consistently brings added value to your projects.',
			image: '/images/how-to-work-together-integration.jpeg'
		}
	];
</script>

<section id="how-to-work-together" class="w-full p-[5%]" title="How to work together">
	<div class="grid grid-cols-3 mx-auto w-full max-w-[1730px] gap-10">
		<h2 class="col-span-3 px-5 text-3xl font-light 2xl:px-0 md:text-5xl pb-[5%]">
			How to Work Together
		</h2>
		<!-- Discovery Stage -->
		{#each Cards as e}
			<picture class="grid col-span-3 md:col-span-1 max-w-[600px]">
				<div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay rounded-xl" />
				<article
					class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-start font-normal text-gray-200"
				>
					<h3 class="text-3xl text-[--light-blue] relative">{e.title}</h3>
					<p>{e.description}</p>
				</article>
				<img
					class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2] rounded-xl"
					alt="who_we_are"
					src={e.image}
				/>
			</picture>
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
		animation-range: 0% 15%;
	}
	picture:nth-of-type(2) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 25%;
	}
	picture:nth-of-type(3) {
		animation: slideInFromLeft linear both;
		animation-timeline: view();
		animation-range: 0% 35%;
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
