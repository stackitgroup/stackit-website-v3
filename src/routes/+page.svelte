<script>
	import Icon from 'svelte-awesome';
	import arrowRight from 'svelte-awesome/icons/arrowRight';
	import WhoWeAre from './staffing/components/who-we-are.svelte';
	import StaffingInnovation from './staffing/components/staffing-innovation.svelte';
	import WhyWeExcel from './staffing/components/why-we-excel.svelte';
	import HowToWorkTogether from './staffing/components/how-to-work-together.svelte';
	import SomeOfOurClients from './staffing/components/some-of-our-clients.svelte';
	import TheResult from './staffing/components/the-result.svelte';
	import HeroStaffing from './staffing/components/hero-staffing.svelte';
</script>

<svelte:head>
	<title>Stackit</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeroStaffing />
<!-- Who we are -->
<WhoWeAre />
<!-- Staffing Innovation -->
<StaffingInnovation />
<!-- Why we excel. Why us -->
<WhyWeExcel />
<!-- How to work together -->
<HowToWorkTogether />
<!-- Some of our Clients -->
<SomeOfOurClients />
<!-- The result?  -->
<TheResult />
