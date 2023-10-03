<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Stackit</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="bg-[#283c4d] min-h-[70vh] text-white flex flex-col gap-6 items-center justify-center text-center px-72"
>
	<p class="text-5xl">Staffing Innovation Worldwide with Latin America Software Talent.</p>
	<a href="/">
		<button class="text-2xl text-white rounded-full px-5 py-3 bg-[#016fce] outline-none">
			Let's Talk ➡️
		</button>
	</a>
</section>

<section
	class="bg-white min-h-[70vh] flex gap-6 md:items-center justify-between md:px-72 sm:flex-col pt-5"
>
	<div class="flex w-80 border items-center gap-2">
		<img class="object-fit w-12 h-12" src="/images/stackit_item.png" alt="" />
		<p class="text-3xl font-bold">Who we are</p>
	</div>

	<div>
		<img src="/images/who_we_are.png" alt="" />
	</div>
</section>
