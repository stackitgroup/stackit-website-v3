<script>
	import Navbar from './navbar.svelte';
	import SideMenu from './side-menu.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full bg-white flex justify-between items-center lg:max-h-[70px] max-w-7xl mx-auto py-[2%] px-5 2xl:px-0"
>
	<picture class="flex items-center w-1/2 gap-2" title="Stackit Logo">
		<img class="h-12 w-44 object-fit" src="/images/stackit_logo_dark.png" alt="Stakit Isotipo" />
	</picture>

	<SideMenu />
	<Navbar />
</header>
