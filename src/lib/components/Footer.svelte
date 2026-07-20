<script>
	import logo from '$lib/assets/logo-small.webp';
	import logoLight from '$lib/assets/logo-small-light.webp';

	let footerLogo = $derived(logo);

	let isDarkMode = $state(false);
	$effect(() => {
		const darkMode = window.matchMedia('(prefers-color-scheme:dark)');

		isDarkMode = darkMode.matches;

		isDarkMode ? (footerLogo = logoLight) : (footerLogo = logo);

		darkMode.addEventListener('change', (e) => {
			isDarkMode = e.matches;
		});
	});
</script>

<footer>
	<div class="footer-container">
		<div class="logo">
			<img src={footerLogo} alt="" />
		</div>

		<div class="contact-details">
			<p>
				<a href="mailto:szentmik@gmail.com" aria-label="email"
					><i class="icon fa-solid fa-at"></i></a
				>
			</p>
			<p>
				<a href="tel:+36307850231" aria-label="telephone"><i class="icon fa-solid fa-phone"></i></a>
			</p>
			<p>
				<a href="https://api.whatsapp.com/send?phone=36307850231" aria-label="WhatsApp"
					><i class="icon fa-brands fa-whatsapp"></i></a
				>
			</p>
		</div>
	</div>

	<div  class="copy">
		<span>&copy; Adam Szentmiklossy</span>
	</div>
</footer>

<style>
	footer {
		display: grid;
        padding-inline: var(--padding);
	}

    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width: 680px) {
            flex-direction: column;
            margin-bottom: 3rem;

            i {
                text-shadow: .1rem .1rem .1rem var(--bg);
            }
        }
    }

	.contact-details {
		display: flex;
		justify-content: flex-end;
		gap: 3rem;
	}

    .copy {
        display: flex;
        justify-content: center;
    }

	.icon {
		font-size: 2rem;
	}
	img {
		object-fit: contain;
		aspect-ratio: 1/1;
		height: auto;
		width: 7rem;
	}
</style>
