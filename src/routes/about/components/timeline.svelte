<script lang="ts">
	import { teamMembers } from '../data/team-members';
	import TeamMemberCard from './team-member-card.svelte';
</script>

<section id="stack-it-team" class="w-full p-[5%]">
	<div class="flex flex-col gap-20 w-full max-w-[1730px] mx-auto">
		<h1 class="text-5xl">Meet Stack <span class="text-[--blue]">IT</span></h1>
		<section class="grid w-full grid-cols-1 gap-5 pb-20 sm:grid-cols-2 md:grid-cols-3">
			{#each teamMembers as teamMember}
				<TeamMemberCard {teamMember} />
			{/each}
		</section>
	</div>
</section>
