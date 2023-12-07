<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Icon } from 'svelte-awesome';
	import linkedin from 'svelte-awesome/icons/linkedin';

	onMount(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				document.querySelector(anchor?.getAttribute('href') as any).scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center'
				});
			});
		});
	});

	const revisitLinks: Record<string, { title: string; href: string }[]> = {
		'/': [
			{ title: 'Trusted By', href: '#trusted-by' },
			{ title: 'Who we are', href: '#who-we-are' },
			{ title: 'Our Services', href: '#our-services' },
			{ title: 'Our Work', href: '#our-work' },
			{ title: 'Why we Excel. Why us.', href: '#why-we-excel' },
			{ title: 'How to Work Together', href: '#how-to-work-together' }
		],
		'/services': [
			{ title: 'Stackit Overview', href: '#services-overview' },
			{ title: 'Staffing Innovation', href: '#staffing-service' },
			{ title: 'Custom Software', href: '#custom-software-service' }
		],
		'/about': [
			{ title: 'About Us', href: '#about-stack-it' },
			{ title: 'Meet Stack IT', href: '#stack-it-team' }
		]
	};
</script>

<footer title="Layout Footer" class="w-full pt-[4%] px-[5%] pb-[1%]">
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
				<li><a href="/services">Services</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/case-study">Case Study</a></li>
			</ul>
		</section>
		<!-- Contact -->
		<section
			class="col-span-2 gap-2 flex flex-col {revisitLinks[$page.url.pathname]
				? 'md:[grid-column:5/6] md:[grid-row:1/2]'
				: 'md:[grid-column:4/5] md:[grid-row:1/2]'}"
		>
			<h3 class="text-xl font-semibold">Contact</h3>
			<ul class="flex flex-col gap-2 pl-1 text-sm">
				<li>
					<a href="tel:+16199175387"> Phone: +1 (619) 917 5387 </a>
				</li>
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
		{#if revisitLinks[$page.url.pathname]}
			<section class="flex flex-col col-span-2 gap-2 md:col-span-1">
				<h3 class="text-xl font-semibold">Revisit</h3>
				<ul class="flex flex-col gap-2 pl-1 text-sm">
					{#each revisitLinks[$page.url.pathname] as item}
						<li>
							<a href={item.href}>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<!-- Product Sites -->
		<section class="flex flex-col col-span-2 gap-2 md:col-span-1">
			<h3 class="text-xl font-semibold">Product Sites</h3>

			<ul class="flex flex-col gap-2 pl-1 text-sm">
				<li>
					<a href="https://ledav2.jup.io/"> LEDA </a>
				</li>
				<li>Metis</li>
				<li>
					<a href="https://www.defispot.com/"> Defispot </a>
				</li>
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
