<script>
	import HeroBanner from '../../components/hero-banner.svelte';
	import TheResult from '../../components/the-result.svelte';
	import TrustedBy from '../staffing/components/trusted-by.svelte';
	import HowWeCollaborate from './components/how-we-collaborate.svelte';
	import MaintenanceSupport from './components/maintenance-support.svelte';
	import SoftwareDevelopment from './components/software-development.svelte';
	import WhyChooseUs from './components/why-choose-us.svelte';
</script>

<svelte:head>
	<title>Stack IT</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeroBanner backgroundImage="/images/custom-software-hero.jpeg">
	<slot slot="tittle">
		<h1>Custom-built software to</h1>
		<h2>
			&lt;<span class="font-normal text-blue-500">Empower your Success.</span>/>
		</h2>
	</slot>
</HeroBanner>

<TrustedBy />
<SoftwareDevelopment />
<MaintenanceSupport />
<WhyChooseUs />
<HowWeCollaborate />
<TheResult>
	<h3 class="text-xl text-gray-200 md:text-2xl">
		A solid custom software solution for your business.

		<br />
		Let's talk! Discover how Stack IT can drive your digital transformation and help you reach new heights.
		digital transformation and help you reach new heights.
	</h3>
</TheResult>
