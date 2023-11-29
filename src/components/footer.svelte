<script lang="ts">
	import linkedin from 'svelte-awesome/icons/linkedin';
	import { Icon } from 'svelte-awesome';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				document.querySelector(anchor?.getAttribute('href') as any).scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
			});
		});
	});
</script>

<footer title="Layout Footer" class="w-full py-[2%] px-[5%]">
	<div class="grid grid-cols-4 gap-2 mx-auto md:grid-cols-5 max-w-[1730px]">
		<section class="flex flex-col col-span-4 gap-2 md:col-span-1">
			<figure class="flex items-center w-full gap-2">
				<img
					class="h-12 w-44 object-fit"
					src="/images/stackit_logo_dark.png"
					alt="Stakit Logotipo"
				/>
			</figure>
			<div class="flex-col hidden w-1/2 text-xl md:flex">
				<span>Success.</span>
				<span class="font-medium text-blue-500">Coded.</span>
			</div>
		</section>
		<!-- Quick Links -->
		<section class="flex flex-col col-span-2 gap-2 md:col-span-1">
			<h3 class="text-xl font-semibold">Quick links</h3>
			<ul class="flex flex-col gap-2 pl-1 text-sm">
				<li><a href="/staffing">Staffing</a></li>
				<li><a href="/custom-software">Custom Software</a></li>
			</ul>
		</section>
		<!-- Contact -->
		<section class="col-span-2 gap-2 flex flex-col md:[grid-column:5/6] md:[grid-row:1/2]">
			<h3 class="text-xl font-semibold">Contact</h3>
			<ul class="flex flex-col gap-2 pl-1 text-sm">
				<li>Phone: +1 (619) 917 5387</li>
				<li>
					<a class="text-base" href="mailto:hello@stackitgroup.com"> hello@stackitgroup.com</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/company/stackit">
						<Icon
							class="text-white bg-gray-700 rounded-sm p-[1px] w-7 h-7"
							data={linkedin}
							scale={2}
						/>
					</a>
				</li>
			</ul>
		</section>
		<!-- Revisit -->

		{#if ['/', '/staffing'].includes($page.url.pathname)}
			<section class="flex flex-col col-span-2 gap-2 md:col-span-1">
				<h3 class="text-xl font-semibold">Revisit</h3>
				<ul class="flex flex-col gap-2 pl-1 text-sm">
					<li><a href="#who-we-are">Who we are</a></li>
					<li>
						<a href="#staffing-innovation" class="text-clip">Staffing Innovation </a>
					</li>
					<li>
						<a href="#why-we-excel">Why we excel</a>
					</li>
					<li>
						<a href="#how-to-work-together">How to work together</a>
					</li>
					<li><a href="#our-clients">Our clients</a></li>
				</ul>
			</section>
		{/if}

		{#if $page.url.pathname === '/custom-software'}
			<section class="flex flex-col col-span-2 gap-2 md:col-span-1">
				<h3 class="text-xl font-semibold">Revisit</h3>

				<ul class="flex flex-col gap-2 pl-1 text-sm">
					<li><a href="#software-development">Software Development</a></li>
					<li>
						<a href="#maintenance-support" class="text-clip">Maintenance & Support</a>
					</li>
					<li>
						<a href="#why-choose-us">Why choose us</a>
					</li>
					<li>
						<a href="#how-we-collaborate">How We Collaborate</a>
					</li>
					<li><a href="#our-clients">Our clients</a></li>
				</ul>
			</section>
		{/if}
		<!-- Product Sites -->
		<section class="flex flex-col col-span-2 gap-2 md:col-span-1">
			<h3 class="text-xl font-semibold">Product Sites</h3>

			<ul class="flex flex-col gap-2 pl-1 text-sm">
				<li>LEDA</li>
				<li>Metis</li>
				<li>Interview Buddy</li>
			</ul>
		</section>
		<div class="col-span-4 md:col-span-5">
			<div class="bg-gray-300 h-[2px] divider"></div>

			<div class="py-3 text-gray-400">
				Copyright © Stack IT | 4955 Wightman St. San Diego, California, 92105 United States | VAT,
				tax code, and number of registration with the US Equivalent
			</div>
		</div>
	</div>
</footer>
