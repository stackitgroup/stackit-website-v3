<script>
	import Navbar from './Navbar.svelte';
	import Sidemenu from './Sidemenu.svelte';
</script>

<header class="bg-[#283c4d] fixed w-full h-auto z-50">
	<div
		class="flex flex-col md:flex-row justify-between items-center lg:max-h-[70px] max-w-[1200px] mx-auto py-[3%] lg:py-[1%] px-[5%]"
	>
		<div class="">
			<a href="/">
				<img src="/images/stackit_logo.png" alt="SvelteKit" class="h-[52px] w-[200px]" />
			</a>
		</div>

		<Sidemenu />
		<Navbar />
	</div>
</header>
