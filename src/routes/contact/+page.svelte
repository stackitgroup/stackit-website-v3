<script lang="ts">
	import type { ActionData } from './$types';
	import CalendlyWidget from './components/calendly-widget.svelte';
	import ContactForm from './components/contact-form.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Contact | Stack IT</title>
</svelte:head>

<section title="Contact Us" class="w-full p-[5%] contact-bg">
	<div class="flex flex-col gap-10 mx-auto w-full max-w-[1730px] text-white">
		<header class="px-5 2xl:px-0 pb-[5%] flex gap-5 justify-center items-center flex-col">
			<h2 class="text-2xl">Get in touch</h2>
			<h3 class="text-5xl text-center">
				Let's shape the <span class="text-[var(--light-blue)]">future</span>
			</h3>
		</header>
		<div class="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
			<CalendlyWidget />
			<ContactForm {form} />
		</div>
	</div>
</section>

<style>
	.contact-bg {
		background-image: linear-gradient(180deg, #283c4d -18.66%, #259aff 145.69%);
	}
</style>
