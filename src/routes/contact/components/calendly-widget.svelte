<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		document.head.appendChild(script);
	});
</script>

<div
	class="calendly-inline-widget h-[600px] md:w-[500px] md:h-[600px]"
	data-url="https://calendly.com/testingalphablock/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=510621&text_color=ffffff&primary_color=ed3688"
/>

<style lang="postcss">
	div.calendly-inline-widget {
		opacity: 0;
		animation: reveal linear both;
		animation-timeline: view();
		animation-range: 0% 15%;
		scroll-behavior: smooth;
	}

	@keyframes reveal {
		0% {
			opacity: 0;
			transform: translateX(-100px);
			scale: 0.9;
		}
		100% {
			opacity: 1;
			transform: translateX(0px);
			scale: 1;
		}
	}
</style>
