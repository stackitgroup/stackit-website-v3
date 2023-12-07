<script>
	import { onMount } from 'svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import './styles.css';

	onMount(() => {
		const $top = document.getElementById('top');
		const $backToTop = document.getElementById('back-to-top');
		window.addEventListener('scroll', () => {
			// If scroll is at the top, remove opacity
			// Else, add opacity
			const isTopVisible = !$top?.getBoundingClientRect().top;

			if (isTopVisible) {
				$backToTop?.classList.remove('right-3');
				$backToTop?.classList.add('-right-20');
			} else {
				$backToTop?.classList.remove('-right-20');
				$backToTop?.classList.add('right-3');
			}
		});
	});
</script>

<div id="top" />
<Header />

<!-- <Transition url={$page.url}> -->
<slot />
<!-- </Transition> -->
<Footer />

<div
	id="back-to-top"
	class="flex duration-200 fixed z-50 bg-[#259aff] border border-none rounded-full w-14 h-14 items-center -right-20 justify-center bottom-6"
>
	<a
		href="#top"
		on:click|preventDefault={() =>
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})}
	>
		<img src="/icons/arrow.svg" alt="arrow to scroll up" />
	</a>
</div>
