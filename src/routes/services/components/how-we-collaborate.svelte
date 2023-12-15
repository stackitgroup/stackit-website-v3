<script lang="ts">
	const Cards = [
		{
			title: 'Listen',
			description: `Our collaboration starts with listening. We pay careful attention to your business goals,
				using this understanding to gauge project complexity and size accurately. This listening
				phase is fundamental to establishing a strong foundation for our partnership.`,
			image: '/images/how-to-work-together-discovery.png'
		},
		{
			title: 'Plan',
			description: `Next, we plan. Armed with your vision and our expertise, we craft a comprehensive plan of
				action. This includes projected timelines for feature and functionality delivery, fostering
				an environment of agile teams, and functional results. This planning stage ensures
				transparency and efficiency.`,
			image: '/images/how-to-work-together-selection.png'
		},
		{
			title: 'Succeed',
			description: `Our ultimate goal is your success. We don't just deliver code; we deliver success, neatly
				packaged and ready to integrate seamlessly into your business. Let's talk! Discover how
				Stack IT can drive your digital transformation and help you reach new heights.`,
			image: '/images/how-to-work-together-integration.jpeg'
		}
	];
</script>

<section id="how-to-work-together" class="w-full p-[5%]">
	<div class="grid grid-cols-3 mx-auto w-full max-w-[1730px] gap-5">
		<h2 class="col-span-3 px-5 text-3xl font-light 2xl:px-0 md:text-5xl pb-[5%]">
			How to Work Together
		</h2>
		{#each Cards as e}
			<picture class="grid col-span-3 md:col-span-1">
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
