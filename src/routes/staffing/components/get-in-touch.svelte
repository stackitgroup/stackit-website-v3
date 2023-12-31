<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Recaptcha } from 'svelte-recaptcha-v2';
	import type { ActionData } from '../../contact/$types';
	const VITE_GOOGLE_RECAPTCHA_PUBLIC_KEY = import.meta.env.VITE_GOOGLE_RECAPTCHA_PUBLIC_KEY;

	let isLoading = false;
	let isRobot = true;

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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onCaptchaSuccess = (event: any) => {
		console.log('token received: ' + event.detail.token);

		if (event.detail.token) {
			isRobot = false;
		}
	};

	const onCaptchaError = () => {
		console.log('recaptcha init has failed.');
		isRobot = true;
	};

	const onCaptchaExpire = () => {
		console.log('recaptcha api has expired');
		isRobot = true;
	};
</script>

<svelte:head>
	<title>Contact Us | Stackit Group</title>
</svelte:head>

{#if form?.success}
	<p>Email Sent Successfully! You will be answered soon.</p>
{/if}

<form method="POST" class="flex flex-col w-full gap-5 p-5 border" use:enhance={handleSubmit}>
	<span class="text-2xl text-center">Consult with our specialists.</span>
	<input
		type="text"
		placeholder="Full name"
		name="fullName"
		class="w-full input input-bordered input-primary"
		class:input-error={form?.errors?.fullName?.at(0)}
	/>
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.fullName?.at(0)}</h2>
	{/if}

	<input
		type="email"
		placeholder="Full name"
		class:input-error={form?.errors?.email?.at(0)}
		name="email"
		class="w-full input input-bordered input-primary"
	/>
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.email?.at(0)}</h2>
	{/if}

	<textarea
		class="textarea textarea-primary"
		class:textarea-error={form?.errors?.message?.at(0)}
		name="message"
		placeholder="What can we do for you?"
	></textarea>
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.message?.at(0)}</h2>
	{/if}

	{#if isRobot}
		<div class="mx-auto">
			<Recaptcha
				on:success={onCaptchaSuccess}
				on:error={onCaptchaError}
				on:expired={onCaptchaExpire}
				sitekey={VITE_GOOGLE_RECAPTCHA_PUBLIC_KEY}
				badge="bottomleft"
				size="normal"
			/>
		</div>
	{/if}
	<button
		class="mx-auto text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-40 bg-[#016fce] transition-colors duration-400"
		disabled={isRobot}
	>
		{#if isLoading}
			Loading...
		{:else}
			Send Email
		{/if}
	</button>
</form>
