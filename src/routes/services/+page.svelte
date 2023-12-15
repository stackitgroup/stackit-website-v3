<script lang="ts">
	import type { ActionData } from '../contact/$types';
	import CalendlyWidget from '../contact/components/calendly-widget.svelte';
	import ContactForm from '../contact/components/contact-form.svelte';
	import Build from './components/build.svelte';
	import CustomSoftwareService from './components/custom-software-service.svelte';
	import ServicesOverview from './components/services-overview.svelte';
	import StaffingService from './components/staffing-service.svelte';
	export let form: ActionData;
</script>

<svelte:head>
	<title>Our Services | Stack IT</title>
	<meta name="og:description" content="Our Services | Stack IT" />
</svelte:head>

<ServicesOverview />
<StaffingService />
<CustomSoftwareService />
<Build />
<section class="w-full p-[5%] contact-bg">
	<div class="flex flex-col mx-auto w-full max-w-[1730px] text-white">
		<header class="px-5 2xl:px-0 pb-[5%] flex gap-5 justify-center items-center flex-col">
			<h2 class="text-2xl">Start the Conversation</h2>
			<p class="text-5xl text-center">
				Let's Talk Solutions and <span class="text-[var(--light-blue)]">Forge Success Together</span
				>
			</p>
		</header>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 w-full">
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
