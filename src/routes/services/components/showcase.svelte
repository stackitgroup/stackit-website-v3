<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	import { faFigma } from '@fortawesome/free-brands-svg-icons';
	import { faCode, faMicroscope, faMobile } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<section class="pt-[1%] px-[5%] pb-[2%] grid grid-cols-2 md:grid-cols-4 gap-10">
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between h-full gap-2 text-white md:text-lg">
			<Fa class="opacity-60" icon={faCode} />
			<span class="self-end">Web Developers</span>
		</p>
	</article>
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between h-full gap-2 text-white md:text-lg">
			<Fa class="opacity-60" icon={faMobile} />
			<span>Mobile Developers</span>
		</p>
	</article>
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between h-full gap-2 text-white md:text-lg">
			<Fa class="opacity-60" icon={faMicroscope} />
			<span>QA Specialists</span>
		</p>
	</article>
	<article class="rounded-xl bg-[--brand-blue] h-[110px] w-full p-[8%]">
		<p class="flex flex-col items-start justify-between h-full gap-2 text-white md:text-lg">
			<Fa class="opacity-60" icon={faFigma} />
			<span>UI/UX Designers</span>
		</p>
	</article>
</section>
