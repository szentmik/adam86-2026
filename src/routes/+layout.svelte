<script>
	import '$lib/styles.css';
	import { setContext } from 'svelte';
	import { translations } from '$lib/i18n.js';
	import favicon from '$lib/assets/favicon.ico';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollTop from '$lib/components/ScrollTop.svelte';

	let { children } = $props();

	let currentLang = $state('hu');

	const t = (key) => {
		return translations[currentLang][key] || key;
	};

	setContext('i18n', {
		get lang() {
			return currentLang;
		},
		setLang: (newLang) => (currentLang = newLang),
		t
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />

<main>
	{@render children()}
</main>
<ScrollTop />
<Footer />
