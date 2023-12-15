<script lang="ts">
	import { teamMembers } from '../data/team-members';
	import type { TeamMember } from '../types/TeamMember';
	import TeamMemberCard from './team-member-card.svelte';

	let currentTeamMember = {} as TeamMember;
	let modalOpen = false;

	const createSelectCaseStudyClick = (teamMember: TeamMember) => () => {
		console.log(teamMember);
		currentTeamMember = teamMember;
		modalOpen = !modalOpen;
	};
</script>

<section id="stack-it-team" class="w-full p-[5%]">
	<div class="flex flex-col gap-20 w-full max-w-[1730px] mx-auto">
		<h1 class="text-5xl">Meet Stack <span class="text-[--blue]">IT</span></h1>
		<section class="grid w-full grid-cols-1 gap-5 pb-20 sm:grid-cols-2 md:grid-cols-3">
			{#each teamMembers as teamMember}
				<TeamMemberCard {teamMember} {createSelectCaseStudyClick} />
			{/each}
		</section>
	</div>
</section>

<dialog class="modal modal-bottom sm:modal-middle" class:modal-open={modalOpen}>
	<div class="modal-box bg-[--gray] p-[3%] max-w-[600px] overflow-y-hidden">
		<h3 class="text-lg font-bold text-black">{currentTeamMember.name}</h3>

		<picture class="grid justify-center mt-5">
			<img
				class="object-contain rounded-lg h-52"
				src={currentTeamMember.img}
				alt={currentTeamMember.name}
			/>
		</picture>

		<br />
		<p class="h-40 overflow-auto text-black bg-red">
			{currentTeamMember.bio}
		</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={() => (modalOpen = !modalOpen)}>close</button>
	</form>
</dialog>

<style>
	::-webkit-scrollbar {
		width: 0.5rem;
	}
	/* Track */
	::-webkit-scrollbar-track {
		background: var(--gray);
	}
	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #757575;
		border-radius: 9999px;
		opacity: 0.4;
	}
	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: var(--blue);
	}
</style>
