<script>
	import SomeOfOurClients from '../staffing/components/some-of-our-clients.svelte';
	import Hero from './components/hero.svelte';
	import HowWeCollaborate from './components/how-we-collaborate.svelte';
	import MaintenanceSupport from './components/maintenance-support.svelte';
	import SoftwareDevelopment from './components/software-development.svelte';
	import TheResult from './components/the-result.svelte';
	import WhyChooseUs from './components/why-choose-us.svelte';
</script>

<svelte:head>
	<title>Stack IT</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<SoftwareDevelopment />
<MaintenanceSupport />
<WhyChooseUs />
<HowWeCollaborate />
<SomeOfOurClients />
<TheResult />
