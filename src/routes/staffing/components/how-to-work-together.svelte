<section
	id="how-to-work-together"
	class="grid w-full grid-cols-3 pt-16 mx-auto max-w-7xl"
	title="How to work together Section"
>
	<h2 class="col-span-3 px-5 mb-10 text-3xl font-light 2xl:px-0 md:text-5xl">
		How to Work Together
	</h2>

	<!-- Discovery Stage -->
	<picture title="Discovery Stage" class="grid col-span-3 md:col-span-1">
		<div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay" />
		<article
			class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-start font-normal text-gray-200"
		>
			<h3 class="text-3xl text-[var(--blue)] relative">
				<span
					class="absolute z-10 flex flex-col items-center gap-2 -left-5 top-3 md:-rotate-90 md:left-20 md:-top-24"
				>
					<svg width="13" height="13" viewBox="0 0 11 11" fill="none">
						<circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6" />
						<circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6" />
					</svg>
					<svg width="1" height="150">
						<path
							d="M0.499998 0.5L0.499994 150"
							stroke="#F2F2F2"
							stroke-opacity="0.4"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				Discovery
			</h3>
			<p>
				The journey begins with discovery. We connect with you to gain a deep understanding of your
				unique project requirements and the specific skills you need. This phase is crucial for
				laying a strong foundation for a successful partnership.
			</p>
		</article>
		<img
			class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]"
			alt="who_we_are"
			src="/images/how-to-work-together-discovery.png"
		/>
	</picture>

	<!-- Selection Card -->
	<picture title="Selection Stage" class="grid col-span-3 md:col-span-1">
		<div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay" />
		<article
			class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-start font-normal text-gray-200"
		>
			<h3 class="text-3xl text-[var(--blue)] relative">
				<span
					class="absolute z-10 flex flex-col items-center gap-2 -left-5 top-3 md:-rotate-90 md:left-20 md:-top-24"
				>
					<svg width="13" height="13" viewBox="0 0 11 11" fill="none">
						<circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6" />
						<circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6" />
					</svg>
					<svg width="1" height="150">
						<path
							d="M0.499998 0.5L0.499994 150"
							stroke="#F2F2F2"
							stroke-opacity="0.4"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				Selection
			</h3>
			<p>
				Next, we embark on the selection process. With expertise and precision, we handpick the
				perfect candidates from our pool of skilled Latin American Developers tailored precisely to
				your requirements. Our thorough vetting ensures that you receive top-tier talent.
			</p>
		</article>
		<img
			class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]"
			alt="who_we_are"
			src="/images/how-to-work-together-selection.png"
		/>
	</picture>

	<!-- Integration -->
	<picture title="Integration Stage" class="grid col-span-3 md:col-span-1">
		<div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay" />
		<article
			class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-start font-normal text-gray-200"
		>
			<h3 class="text-3xl text-[var(--blue)] relative">
				<span class="absolute text-2xl font-semibold text-gray-400 -left-5 top-3 md:hidden">
					<svg width="13" height="13" viewBox="0 0 11 11" fill="none">
						<circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6" />
						<circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6" />
					</svg>
				</span>
				<span
					class="absolute z-10 flex-col items-center hidden gap-2 md:flex -left-5 top-3 md:-rotate-90 md:left-20 md:-top-24"
				>
					<svg width="13" height="13" viewBox="0 0 11 11" fill="none">
						<circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6" />
						<circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6" />
					</svg>
					<svg width="1" height="150">
						<path
							d="M0.499998 0.5L0.499994 150"
							stroke="#F2F2F2"
							stroke-opacity="0.4"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				Integration
			</h3>
			<p>
				Seamless integration is the final step. We orchestrate the smooth transition of the selected
				developers into your team. This collaborative approach drives successful outcomes and
				consistently brings added value to your projects.
			</p>
		</article>
		<img
			class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]"
			alt="who_we_are"
			src="/images/how-to-work-together-integration.jpeg"
		/>
	</picture>
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
