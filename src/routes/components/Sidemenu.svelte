<script>
	import Icon from 'svelte-awesome';
	import bars from 'svelte-awesome/icons/bars';
	import remove from 'svelte-awesome/icons/remove';
	import { page } from '$app/stores';
</script>

<div class="drawer w-[24px] lg:hidden">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<button class="flex text-[var(--white)]">
			<label for="my-drawer">
				<Icon data={bars} scale={1.5} />
			</label>
		</button>
	</div>
	<div class="drawer-side right-0">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
		<ul class="menu p-4 min-h-full w-[300px] bg-[var(--brand-blue)] text-base-content text-2xl">
			<li>
				<div class="flex flex-row w-full items-start justify-between">
					<a href="/">
						<img src="/images/stackit_logo.png" alt="SvelteKit" class="h-[52px] w-[200px]" />
					</a>
					<label for="my-drawer"><Icon data={remove} scale={1.5} /></label>
				</div>
			</li>
			<li>
				<a
					class="text-white hover:underline decoration-blue-500 decoration-4
			{$page.url.pathname === '/' && 'underline font-semibold'}"
					href="/">Staffing</a
				>
			</li>
			<li><a href="/custom-software">Custom Software</a></li>
			<li>
				<a href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it">
					<button class="text-white rounded-full px-3 bg-[#016fce] outline-none">
						Let's Talk
					</button>
				</a>
			</li>
		</ul>
	</div>
</div>
