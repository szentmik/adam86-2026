<script>
	import { getContext } from 'svelte';
	import heroImg from '$lib/assets/hero.webp';

	const { t } = getContext('i18n');
</script>

<section id="hero" class="hero-section">
	<div class="grid">
		<div>
			<h1>{t('heroTitle')}</h1>
			<h3>{t('heroSubtitle')}</h3>
			<a href="#contact" class="btn">{t('heroButton')}</a>
		</div>
		<div>
			<img src={heroImg} alt="" />
		</div>
	</div>
</section>

<style>
	img {
		aspect-ratio: 1/1;
		object-fit: cover;
		height: auto;
		width:100%;
	}
	h3 {
		margin-block: 1rem 2rem;
	}
	@media (max-width: 992px) {
		.grid {
			gap: 0;
			text-align: center;
		}
	}
</style>
