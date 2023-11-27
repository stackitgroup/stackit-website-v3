<script lang="ts">
	import TeamMemberCard from './team-member-card.svelte';
	import { teamMembers } from '../data/team-members';
</script>

<section class="w-full p-[5%]">
	<div class="flex flex-col gap-20 w-full max-w-[1730px] mx-auto">
		<h1 class="text-5xl">Meet Stack <span class="text-[--blue]">IT</span></h1>
		<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full pb-20">
			{#each teamMembers as teamMember}
				<TeamMemberCard {teamMember} />
			{/each}
		</section>
	</div>
</section>
