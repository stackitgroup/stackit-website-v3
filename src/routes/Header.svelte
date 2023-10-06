<script>
	import { page } from '$app/stores';
</script>

<header
	class="flex justify-between items-center px-28 bg-[#283c4d] transition-all py-2 fixed w-full z-50"
>
	<div class="">
		<a href="/">
			<img src="/images/stackit_logo.png" alt="SvelteKit" class="h-auto w-[220px]" />
		</a>
	</div>

	<nav class="flex gap-4 text-2xl font-semibold">
		<a
			class="text-white hover:underline decoration-blue-500 decoration-4
			{$page.url.pathname === '/' && 'underline'}"
			href="/"
		>
			Staffing
		</a>
		<a class="text-white" href="/custom-software">Custom Software</a>
		<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
			<button class="text-white rounded-full px-3 bg-[#016fce] outline-none"> Let's Talk </button>
		</a>
	</nav>
</header>
