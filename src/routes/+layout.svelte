<script>
	import Header from './components/Header.svelte';
	import './styles.css';
	import { page } from '$app/stores';
	import Transition from '../components/transition.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main>
		<Transition url={$page.url}>
			<slot />
		</Transition>
	</main>

	<Footer />
</div>
