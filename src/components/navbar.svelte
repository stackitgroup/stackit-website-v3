<script>
	import { page } from '$app/stores';
</script>

<nav class="hidden w-1/2 gap-4 text-lg md:justify-end md:flex">
	<a class="relative group" href="/services">
		Services
		<hr
			class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
			class:w-full={$page.url.pathname === '/custom-software'}
			class:w-0={$page.url.pathname !== '/custom-software'}
		/>
	</a>
	<a class="relative group" href="/about">
		About
		<hr
			class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
			class:w-full={$page.url.pathname === '/about'}
			class:w-0={$page.url.pathname !== '/about'}
		/>
	</a>
	<a class="relative group" href="/contact">
		Contact
		<hr
			class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
			class:w-full={$page.url.pathname === '/contact'}
			class:w-0={$page.url.pathname !== '/contact'}
		/>
	</a>
	<a class="relative group" href="/case-study">
		Case Study
		<hr
			class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
			class:w-full={$page.url.pathname === '/case-study'}
			class:w-0={$page.url.pathname !== '/case-study'}
		/>
	</a>
</nav>

<style lang="postcss">
	hr {
		/* @apply text-xs; */
	}
</style>
