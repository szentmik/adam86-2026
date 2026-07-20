<script>
	import logoSmallLight from '$lib/assets/logo-small-light.webp';
	import logoSmall from '$lib/assets/logo-small.webp';
	
	let isMenuOpen = $state(false);
	let isDarkMode = $state(false);

	$effect(() => {
		const darkMode = window.matchMedia('(prefers-color-scheme:dark)');

		isDarkMode = darkMode.matches;

		darkMode.addEventListener('change', (e) => {
			isDarkMode = e.matches;
		});
	});

	$effect(() => {
		if (isMenuOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	});

	const navLinks = [
		{ name: 'Föoldal', link: '/#' },
		{ name: 'Árak', link: '/#price' },
		{ name: 'Rólam', link: '/#about' },
		{ name: 'Kapcsolat', link: '/#contact' }
	];
</script>

<nav>
	<a href="/#" class="logo">
		<picture>
			<source media="(min-width:992px)" srcset={isDarkMode ? logoSmallLight : logoSmall} />
			<img src={isDarkMode ? logoSmallLight : logoSmall} alt="logo" />
		</picture>
	</a>

	<ul class="{isMenuOpen ? 'slide-in' : ''}">
		{#each navLinks as navLink (navLink.link)}
			<li class="nav-link"><a href={navLink.link} onclick={isMenuOpen = !isMenuOpen}>{navLink.name}</a></li>
		{/each}
	</ul>
	<div class="mobile-menu">
		<button
			onclick={() => {
				isMenuOpen = !isMenuOpen;
			}}
			aria-label="mobile menu  btn"
		>
			<i class="fa-solid fa-bars {isMenuOpen ? 'hidden' : ''}"></i>
			<i class="fa-solid fa-close {isMenuOpen ? '' : 'hidden'}"></i>
		</button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		position: absolute;
		top: 0;
		left: 0;
		padding: 1rem;
		width: 100%;
	}
	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		list-style-type: none;
		width: 100%;
	}

	a {
		display: inline-block;
		color: var(--text);
		font-size: 1.2rem;
		font-weight: 800;
		letter-spacing: -0.05rem;
		padding: 0.5rem 1rem;
		text-decoration: none;
		transition: 0.3s;

		img {
			height: 3rem;
		}
	}

	a:hover {
		border-radius: var(--border-radius);
		background-color: var(--bg-light);
	}

	button {
		position: relative;
		border: none;
		background: none;
		color: var(--text);
		display: none;
	}

	.fa-solid {
		font-size: 1.75rem;
		position: absolute;
		top: 1rem;
		right: 1rem;
		transition: 0.5s;
	}

	.hidden {
		opacity: 0;
		rotate: 540deg;
	}

	:global(.no-scroll) {
		overflow: hidden !important;
		height: 100%;
		position: relative;
	}

	@media (max-width: 992px) {
		button {
			display: block;
		}

		nav {
			position: relative;
			padding-block: 0;
		}

		ul {
			position: fixed;
			top: 0;
			right: 0;
			background: linear-gradient(90deg, transparent 15%, var(--bg-dark) 20%);
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 100dvh;
			transform: translateX(100%);
			transition: 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		}

		.slide-in {
			transform: translateX(0%);
		}
	}
</style>
