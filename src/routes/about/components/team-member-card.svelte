<script lang="ts">
	import type { TeamMember } from '../types/TeamMember';
	export let teamMember: TeamMember;
</script>

<article class="flex flex-col gap-5 w-full h-full items-center border-t-xl">
	<picture class="border-t-xl">
		<img alt={`${teamMember.name} | Stack IT`} class="h-[380px] border-t-xl" src={teamMember.img} />
	</picture>
	<div class="flex flex-col gap-2 p-[5%]">
		<h3 class="text-xl text-[--brand-blue] font-semibold">
			{teamMember.name}
		</h3>
		<h4 class="text-[--light-blue] font-semibold">
			{teamMember.role}
		</h4>
		<p class="opacity-80">
			{teamMember.bio}
		</p>
	</div>
</article>
