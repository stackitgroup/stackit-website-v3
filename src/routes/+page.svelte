<script>
	import HeroBanner from '../components/hero-banner.svelte';
	import TheResult from '../components/the-result.svelte';
	import HowToWorkTogether from './staffing/components/how-to-work-together.svelte';
	import OurServices from './staffing/components/our-services.svelte';
	import OurWork from './staffing/components/our-work.svelte';
	import TrustedBy from './staffing/components/trusted-by.svelte';
	import WhoWeAre from './staffing/components/who-we-are.svelte';
	import WhyWeExcel from './staffing/components/why-we-excel.svelte';
</script>

<svelte:head>
	<title>Stackit</title>
	<meta name="og:description" content="Stackit Website" />
</svelte:head>

<HeroBanner backgroundImage="/images/staffing-hero.jpeg">
	<slot slot="tittle">
		<h1>Staffing Innovation with</h1>
		<h2 class="font-normal text-blue-500">Latin American</h2>
		<h2>
			&lt;<span class="font-normal text-blue-500">Software Talent</span>/>
		</h2>
	</slot>
</HeroBanner>

<TrustedBy />
<WhoWeAre />
<OurServices />
<OurWork />
<WhyWeExcel />
<HowToWorkTogether />
<TheResult>
	<h3 class="text-xl text-gray-200 md:text-2xl">
		Top-tier professionals with the skillset to build you nothing but the best software.
	</h3>
</TheResult>
