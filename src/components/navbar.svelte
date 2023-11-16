<script>
	import { page } from '$app/stores';
</script>

<nav class="hidden w-1/2 gap-4 text-lg md:justify-end md:flex" title="Navigation Menu">
	<a
		class="hover:underline decoration-blue-500 decoration-4
  {$page.url.pathname === '/' && 'underline font-semibold'}"
		href="/"
	>
		Staffing
	</a>
	<a
		class="hover:underline decoration-blue-500 decoration-4 {$page.url.pathname ===
			'/custom-software' && 'underline font-semibold'}"
		href="/custom-software"
	>
		Custom Software
	</a>
</nav>
