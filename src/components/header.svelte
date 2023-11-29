<script>
	import Navbar from './navbar.svelte';
	import SideMenu from './side-menu.svelte';
</script>

<div id="progress" class="fixed z-40 w-screen h-1 bg-[--light-blue]" />
<header class="sticky top-0 z-30 w-full bg-white py-[1%] px-[5%]">
	<div class="flex justify-between items-center lg:max-h-[70px] max-w-[1730px] mx-auto">
		<a href="/" class="flex items-center w-1/2 gap-2" title="Stackit Logo">
			<img class="h-12 w-44 object-fit" src="/images/stackit_logo_dark.png" alt="Stakit Logotipo" />
		</a>

		<SideMenu />
		<Navbar />
	</div>
</header>

<style>
	#progress {
		animation: animation-grow auto linear;
		animation-timeline: scroll(root block);
	}
	@keyframes animation-grow {
		0% {
			width: 0%;
		}
		50% {
			width: 50%;
		}
		100% {
			width: 100%;
		}
	}
</style>
