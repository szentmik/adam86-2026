<script>
	import Hero from '$lib/components/Hero.svelte';
	import Problem from '$lib/components/Problem.svelte';
	import Prices from '$lib/components/Prices.svelte';
	import About from '$lib/components/About.svelte';
	import Project from '$lib/components/Project.svelte';
	import Contact from '$lib/components/Contact.svelte';

	let title = 'Weboldal & Landing Page Készítés | Balatonfüred, Almádi, Veszprém';
	let description =
		'Modern landing page és weboldal készítés Balatonfüred, Balatonalmádi, Tihany és Veszprém környékén, valamint országosan. Kérj ajánlatot!';
	let url = 'https://adam86.hu';
	let ogImage = 'https://adam86.hu/img/og-image.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Szentmiklóssy Ádám",
      "url": "https://adam86.hu",
      "jobTitle": "Webfejlesztő & Landing Page Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "adam86.hu"
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Veszprém megye",
        "addressCountry": "HU"
      },
      "knowsAbout": [
        "Webfejlesztés",
        "Landing page készítés",
        "SvelteKit",
        "SEO"
      ]
    }
    </script>`}
</svelte:head>

<Hero />
<div class="separator"></div>
<Problem />
<div class="separator"></div>
<Prices />
<div class="separator"></div>
<About />
<div class="separator"></div>
<Project />
<div class="separator"></div>
<Contact />
<div class="separator"></div>
