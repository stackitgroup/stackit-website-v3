<script>
	import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import './styles.css';
</script>

<div id="top" />
<Header />

<!-- <Transition url={$page.url}> -->
<slot />
<!-- </Transition> -->
<Footer />

<div
	id="back-to-top"
	class="flex right-3 duration-200 fixed z-50 bg-[#259aff] border border-none rounded-full w-14 h-14 items-center justify-center bottom-6"
>
	<a
		href="#top"
		class="text-white"
		on:click|preventDefault={() =>
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})}
	>
		<Fa icon={faCalendarPlus} size="1.3x" />
	</a>
</div>

<style lang="postcss">
	#back-to-top {
		animation: animation-grow auto linear;
		animation-timeline: scroll(root block);
		animation-range: 0% 5%;
	}

	@keyframes animation-grow {
		0% {
			@apply -right-20;
		}
		50% {
			@apply -right-14;
		}
		100% {
			@apply right-3;
		}
	}
</style>
