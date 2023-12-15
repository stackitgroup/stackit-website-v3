<script>
	export let tittle = 'section-container';
	export let backgroundColor = 'bg-[--light-gray]';
</script>

<section id={tittle} title={tittle} class="w-full px-[5%] py-[10%] md:py-[3%] {backgroundColor}">
	<div class="grid grid-cols-2 gap-10 mx-auto max-w-[1730px] w-full">
		<slot />
	</div>
</section>
