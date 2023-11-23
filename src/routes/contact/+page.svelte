<svelte:head>
	<title>Contact</title>
	<meta name="og:description" content="Stackit Website" />
	<script
		type="text/javascript"
		src="https://assets.calendly.com/assets/external/widget.js"
	></script>
	<script>
		Calendly.initInlineWidget({
			url: 'https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it?month=2023-11',
			parentElement: document.getElementById('calendly-embed')
		});
	</script>
</svelte:head>

<div id="calendly-embed" style="min-width:320px;height:700px;"></div>
