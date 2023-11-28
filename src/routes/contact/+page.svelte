<script lang="ts">
	import type { ActionData } from './$types';
	import CalendlyWidget from './components/calendly-widget.svelte';
	import ContactForm from './components/contact-form.svelte';

	export let form: ActionData;
</script>

<section title="Contact us" class="grid gap-10 gird-cols-1 md:gird-cols-2">
	<ContactForm {form} />
	<CalendlyWidget />
</section>
