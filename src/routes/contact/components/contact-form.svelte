<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionData } from '../$types';

	let isLoading = false;

	export let form: ActionData;

	const handleSubmit: SubmitFunction = ({ formElement }) => {
		isLoading = true;

		return async ({ result, update }) => {
			isLoading = false;
			if (result.type === 'success') {
				formElement.reset();
			}

			await update();
		};
	};
</script>

<svelte:head>
	<title>Contact Us | Stackit Group</title>
</svelte:head>

{#if form?.success}
	<p>Email Sent Successfully! You will be answered soon.</p>
{/if}

<form
	method="POST"
	action="/contact"
	class="flex flex-col w-full gap-5 p-5 pt-0 max-w-[600px]"
	use:enhance={handleSubmit}
>
	<span class="text-2xl text-center">Consult with our specialists.</span>
	<input
		type="text"
		placeholder="Full name"
		name="fullName"
		class="w-full input bg-[#181823]/60"
		class:input-error={form?.errors?.fullName?.at(0)}
	/>
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.fullName?.at(0) || ''}</h2>
	{/if}

	<input
		type="email"
		placeholder="Email"
		class:input-error={form?.errors?.email?.at(0)}
		name="email"
		class="w-full input bg-[#181823]/60"
	/>
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.email?.at(0) || ''}</h2>
	{/if}

	<textarea
		class="w-full textarea bg-[#181823]/60"
		class:textarea-error={form?.errors?.message?.at(0)}
		name="message"
		placeholder="What can we do for you?"
	></textarea>
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.message?.at(0) || ''}</h2>
	{/if}

	<button
		title="Send Email"
		class="mx-auto border-none text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-40 bg-black hover:text-black hover:bg-white transition ease-in-out duration-300 cursor-pointer"
	>
		{#if isLoading}
			Loading...
		{:else}
			Send Email
		{/if}
	</button>
</form>

<style lang="postcss">
	textarea::placeholder {
		font-size: 1rem;
	}
	form {
		opacity: 0;
		animation: reveal linear both;
		animation-timeline: view();
		animation-range: 0% 15%;
		scroll-behavior: smooth;
	}

	@keyframes reveal {
		0% {
			opacity: 0;
			transform: translateX(100px);
			scale: 0.9;
		}
		100% {
			opacity: 1;
			transform: translateX(0px);
			scale: 1;
		}
	}
</style>
