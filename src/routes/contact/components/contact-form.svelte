<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Recaptcha } from 'svelte-recaptcha-v2';
	import type { ActionData } from '../$types';

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

<form method="POST" class="flex flex-col gap-5 p-5 border" use:enhance={handleSubmit}>
	<label for="fullName">Full name</label>
	<input id="fullName" type="text" name="fullName" value="Alefrank Martinez" />
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.fullName?.at(0)}</h2>
	{/if}

	<label for="email">Email</label>
	<input type="email" name="email" id="email" value="Alefrank.martinez@stackitgroup.com" />
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.email?.at(0)}</h2>
	{/if}

	<label for="message">What can we do for you?</label>
	<textarea
		name="message"
		id="message"
		value="
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fuga laborum, ipsam delectus, optio sunt impedit eaque, tempora at neque soluta tempore velit asperiores itaque consequuntur quae animi cum nulla!"
	/>
	{#if form?.errors}
		<h2 class="text-center text-red-600">{form?.errors.message?.at(0)}</h2>
	{/if}

	{#if isRobot}
		<Recaptcha
			on:success={onCaptchaSuccess}
			on:error={onCaptchaError}
			on:expired={onCaptchaExpire}
			sitekey="CODE"
			badge="bottomleft"
			size="normal"
		/>
	{/if}
	<button class="mx-auto" disabled={!isRobot}>
		{#if isLoading}
			Loading...
		{:else}
			Send Email
		{/if}
	</button>
</form>
