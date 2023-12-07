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
<section title="Contact Us" class="w-full p-[5%] contact-bg">
	<div class="flex flex-col mx-auto w-full max-w-[1730px] text-white">
		<header class="px-5 2xl:px-0 pb-[5%] flex gap-5 justify-center items-center flex-col">
			<h2 class="text-2xl">Get in touch</h2>
			<p class="text-5xl">
				Let's shape the <span class="text-[var(--light-blue)]">future</span>
			</p>
		</header>
		<div>
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
