<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCode, faMicroscope, faMobile } from '@fortawesome/free-solid-svg-icons';
	import { faFigma } from '@fortawesome/free-brands-svg-icons';
</script>

<section
	class="pt-[1%] px-[5%] pb-[2%] grid grid-cols-2 md:grid-cols-4 gap-10"
	title="Stack IT Perks Showcase"
>
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between gap-2 md:text-lg text-white h-full">
			<Fa class="opacity-60" icon={faCode} />
			<span class="self-end">Web Developers</span>
		</p>
	</article>
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between gap-2 md:text-lg text-white h-full">
			<Fa class="opacity-60" icon={faMobile} />
			<span>Mobile Developers</span>
		</p>
	</article>
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between gap-2 md:text-lg text-white h-full">
			<Fa class="opacity-60" icon={faMicroscope} />
			<span>QA Specialists</span>
		</p>
	</article>
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between gap-2 md:text-lg text-white h-full">
			<Fa class="opacity-60" icon={faFigma} />
			<span>UI/UX Designers</span>
		</p>
	</article>
</section>
