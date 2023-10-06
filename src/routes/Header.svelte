<script>
	import { page } from '$app/stores';
</script>

<header class="bg-[#283c4d] fixed w-full z-50">
	<div class="flex justify-between items-center max-w-[1200px] mx-auto py-[1%] px-[5%]">
		<div class="">
			<a href="/">
				<img src="/images/stackit_logo.png" alt="SvelteKit" class="h-[52px] w-[200px]" />
			</a>
		</div>

		<nav class="flex gap-4 text-lg">
			<a
				class="text-white hover:underline decoration-blue-500 decoration-4
			{$page.url.pathname === '/' && 'underline font-semibold'}"
				href="/"
			>
				Staffing
			</a>
			<a class="text-white" href="/custom-software">Custom Software</a>
			<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
				<button class="text-white rounded-full px-3 bg-[#016fce] outline-none"> Let's Talk </button>
			</a>
		</nav>
	</div>
</header>
