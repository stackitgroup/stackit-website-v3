<script lang="ts">
	import type { TeamMember } from '../types/TeamMember';
	export let teamMember: TeamMember;

	export let createSelectCaseStudyClick: (teamMember: TeamMember) => () => void;
</script>

<article class="flex flex-col w-full h-full gap-5 border-t-xl">
	<picture class="border-t-xl">
		<img alt={`${teamMember.name} | Stack IT`} class="h-[380px] border-t-xl" src={teamMember.img} />
	</picture>
	<div class="flex flex-col p-[5%]">
		<div class="h-40 overflow-hidden sm:h-52 md:h-44">
			<h3 class="text-xl text-[--brand-blue] font-semibold">
				{teamMember.name}
			</h3>
			<h4 class="text-[--light-blue] font-semibold">
				{teamMember.role}
			</h4>
			<div class="overflow-hidden">
				<p class="opacity-80 text-clip">
					{teamMember.bio.slice(0, 140)}...
				</p>
			</div>
		</div>

		<button
			class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-44 bg-[#016fce] transition-colors duration-400"
			on:click={createSelectCaseStudyClick(teamMember)}
		>
			Read More
			<img src="/icons/arrow.svg" class="w-3 rotate-90" alt="arrow to scroll up" />
		</button>
	</div>
</article>
