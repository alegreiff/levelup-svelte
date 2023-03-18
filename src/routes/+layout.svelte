<script>
	import Episodes from './Episodes.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	export let data;
	$: ({ep_res} = data)
</script>




<Header />
<main>
	<div class="main">
		<slot />
	</div>
	<aside>
		<Episodes episodes={ep_res} />
	</aside>
</main>

<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: 322px 1fr;
		gap: 25px;
	}
	aside {
		order: -1;
	}
</style>