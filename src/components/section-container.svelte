<script>
	export let tittle = 'section-container';
	export let backgroundColor = 'bg-[--light-gray]';
</script>

<section id={tittle} title={tittle} class="w-full p-[5%] {backgroundColor}">
	<div class="grid grid-cols-2 gap-10 mx-auto max-w-[1730px]">
		<slot />
	</div>
</section>
