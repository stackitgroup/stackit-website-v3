<script lang="ts">
	import type { ActionData } from './$types';
	import CalendlyWidget from './components/calendly-widget.svelte';
	import ContactForm from './components/contact-form.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Contact | Stack IT</title>
</svelte:head>

<section title="Contact us" class="grid gap-10 gird-cols-1 md:grid-cols-2">
	<CalendlyWidget />
	<ContactForm {form} />
</section>
