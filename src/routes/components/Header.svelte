<script>
	import Navbar from './navbar.svelte';
	import SideMenu from './side-menu.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full bg-white flex justify-between items-center lg:max-h-[70px] max-w-7xl mx-auto py-[3%] lg:py-[1%] px-[5%]"
>
	<figure class="flex items-center w-1/2 gap-2">
		<img class="w-12 h-12 object-fit" src="/images/stackit_item.png" alt="" />
		<figcaption class="text-3xl font-bold text-[#293c4d]">Stack IT</figcaption>
	</figure>

	<SideMenu />
	<Navbar />
</header>
