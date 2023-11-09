<script>
	import Icon from 'svelte-awesome';
	import bars from 'svelte-awesome/icons/bars';
	import remove from 'svelte-awesome/icons/remove';
	import { page } from '$app/stores';
</script>

<div class="w-1/2 drawer drawer-end md:hidden">
	<div class="drawer-content">
		<!-- Page content here -->
		<label for="my-drawer-4">
			<Icon data={bars} scale={1.5} />
		</label>
	</div>

	<input id="my-drawer-4" type="checkbox" class=" drawer-toggle" />
	<div class="drawer-side">
		<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="min-h-full p-4 text-xl bg-white menu w-80 text-base-content">
			<!-- Sidebar content here -->
			<li>
				<label class="absolute top-0 right-0" for="my-drawer-4">
					<Icon data={remove} scale={1.5} />
				</label>
			</li>
			<br />
			<li>
				<a
					class="focus:bg-none text-black hover:underline decoration-blue-500 decoration-2
			{$page.url.pathname === '/' && 'underline font-semibold'}"
					href="/"
				>
					Staffing
				</a>
			</li>
			<li>
				<a
					class="text-black hover:underline decoration-blue-500 decoration-2
			{$page.url.pathname === '/custom-software' && 'underline font-semibold'}"
					href="/custom-software"
				>
					Custom Software
				</a>
			</li>
			<!-- <li>
				<a
					class="text-black hover:underline decoration-blue-500 decoration-2
			{$page.url.pathname === '/about' && 'underline font-semibold'}"
					href="/about"
				>
					About
				</a>
			</li> -->
			<!-- <li>
				<a
					class="text-black hover:underline decoration-blue-500 decoration-2
			{$page.url.pathname === '/contact-us' && 'underline font-semibold'}"
					href="/#contact-us"
				>
					Contact Us
				</a>
			</li> -->
		</ul>
	</div>
</div>
