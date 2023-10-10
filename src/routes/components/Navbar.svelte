<script>
	import { page } from '$app/stores';
</script>

<nav class="gap-4 text-lg hidden lg:flex">
	<a
		class="text-white hover:underline decoration-blue-500 decoration-4
  {$page.url.pathname === '/' && 'underline font-semibold'}"
		href="/"
	>
		Staffing
	</a>
	<a
		class="text-white hover:underline decoration-blue-500 decoration-4 {$page.url.pathname ===
			'/custom-software' && 'underline font-semibold'}"
		href="/custom-software">Custom Software</a
	>
	<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
		<button class="text-white rounded-full px-3 bg-[#016fce] outline-none"> Let's Talk </button>
	</a>
</nav>
