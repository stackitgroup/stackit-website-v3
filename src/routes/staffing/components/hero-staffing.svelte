<script>
	import { Icon } from 'svelte-awesome';
	import arrowRight from 'svelte-awesome/icons/arrowRight';
</script>

<section id="hero" class="w-full mx-auto border-b-2 border-blue-400 max-w-7xl">
	<picture class="relative h-72 md:h-96">
		<div class="absolute w-full h-72 md:h-96 overlay" />
		<div
			class="absolute grid justify-start w-full pl-5 text-2xl font-light text-white md:pl-20 h-72 md:h-96 place-content-center"
		>
			<span>Staffing Innovation with</span>
			<span class="font-normal text-blue-500">Latin American</span>
			<span>
				&lt;<span class="font-normal text-blue-500">Software Talent</span>/>
			</span>
			<br />
			<a
				class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-40 hover:bg-[#016fce] transition-colors duration-200"
				href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it"
			>
				Let's Talk

				<Icon data={arrowRight} />
			</a>
		</div>
		<source class="w-full h-72 md:h-96" media="(min-width: 768px)" srcset="/images/hero.jpeg" />
		<img class="object-cover w-full h-72 md:h-96" alt="who_we_are" src="/images/hero.jpeg" />
	</picture>
</section>

<style>
	.overlay {
		background: linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%);
	}
</style>
