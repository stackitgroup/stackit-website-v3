<script>
	import Icon from 'svelte-awesome';
	import bars from 'svelte-awesome/icons/bars';
	import { page } from '$app/stores';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<aside class="w-1/2 drawer drawer-end md:hidden" title="Side Menu">
	<div class="drawer-content">
		<label for="my-drawer-4">
			<Icon data={bars} scale={1.5} />
		</label>
	</div>

	<input id="my-drawer-4" type="checkbox" class=" drawer-toggle" />
	<div class="drawer-side">
		<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="min-h-full text-xl bg-white w-80 text-base-content p-[5%] flex flex-col gap-3">
			<li>
				<label class="absolute top-5 right-5" for="my-drawer-4">
					<Fa icon={faXmark} />
				</label>
			</li>
			<li>
				<a class="relative group" href="/services">
					Services
					<hr
						class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
						class:w-full={$page.url.pathname === '/custom-software'}
						class:w-0={$page.url.pathname !== '/custom-software'}
					/>
				</a>
			</li>
			<li>
				<a class="relative group" href="/about">
					About
					<hr
						class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
						class:w-full={$page.url.pathname === '/about'}
						class:w-0={$page.url.pathname !== '/about'}
					/>
				</a>
			</li>
			<li>
				<a class="relative group" href="/contact">
					Contact
					<hr
						class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
						class:w-full={$page.url.pathname === '/contact'}
						class:w-0={$page.url.pathname !== '/contact'}
					/>
				</a>
			</li>
			<li>
				<a class="relative group" href="/case-study">
					Case Study
					<hr
						class="absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full"
						class:w-full={$page.url.pathname === '/case-study'}
						class:w-0={$page.url.pathname !== '/case-study'}
					/>
				</a>
			</li>
		</ul>
	</div>
</aside>
