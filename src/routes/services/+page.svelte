<script lang="ts">
	import ServicesOverview from './components/services-overview.svelte';
	import StaffingService from './components/staffing-service.svelte';
	import CustomSoftwareService from './components/custom-software-service.svelte';
	import Build from './components/build.svelte';
	import CalendlyWidget from '../contact/components/calendly-widget.svelte';
	import ContactForm from '../contact/components/contact-form.svelte';
	import type { ActionData } from '../contact/$types';
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
	<div class="grid gap-10 gird-cols-1 md:grid-cols-2 mx-auto w-full max-w-[1730px] text-white">
		<header
			class="col-span-3 px-5 2xl:px-0 pb-[5%] flex gap-5 justify-center items-center flex-col"
		>
			<h2 class="text-2xl">Get in touch</h2>
			<p class="text-5xl">
				Let's shape the <span class="text-[var(--light-blue)]">future</span>
			</p>
		</header>
		<CalendlyWidget />
		<ContactForm {form} />
	</div>
</section>

<style>
	.contact-bg {
		background-image: linear-gradient(180deg, #283c4d -18.66%, #259aff 145.69%);
	}
</style>
