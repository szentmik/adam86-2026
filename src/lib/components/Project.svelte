<script>
	import { intersection } from '$lib';
	import { getContext } from 'svelte';

	const { t } = getContext('i18n');
</script>

<section id="project" class="section-project">
	<h2>{t('projectTitle')}</h2>
	<div class="grid">
		<div class="item" use:intersection={100}>
			<picture>
				<source media="(max-width: 680px)" srcset="/img/news-m.webp" />
				<img src="/img/news.webp" alt="" loading="lazy" />
			</picture>
			<a href="https://szentmik.github.io/news-homepage-main/" target="_blank">Megtekint</a>
		</div>
		<div class="item" use:intersection={100}>
			<picture>
				<source media="(max-width: 680px)" srcset="/img/snap-m.webp" />
				<img src="/img/snap.webp" alt="" loading="lazy" />
			</picture>

			<a href="https://szentmik.github.io/intro-section-with-dropdown-nav/" target="_blank"
				>Megtekint</a
			>
		</div>
		<div class="item" use:intersection={100}>
			<picture>
				<source media="(max-width: 680px)" srcset="/img/room-m.webp" />
				<img src="/img/room.webp" alt="" loading="lazy" />
			</picture>
			<a href="https://szentmik.github.io/room-homepage/" target="_blank">Megtekint</a>
		</div>
		<div class="item" use:intersection={100}>
			<picture>
				<source media="(max-width: 680px)" srcset="/img/sunnyside-m.webp" />
				<img src="/img/sunnyside.webp" alt="" loading="lazy" />
			</picture>
			<a href="https://szentmik.github.io/sunnyside-agency-landing-page/" target="_blank"
				>Megtekint</a
			>
		</div>
	</div>
</section>

<style>
	.section-project {
		flex-direction: column;
		gap: 2rem;
	}

	.grid {
		div {
			display: grid;
			overflow: hidden;
			place-items: flex-end;
			a {
				background: hsla(0, 0%, 40%, 0.9);
				border-bottom-right-radius: var(--border-radius);
				border-top-left-radius: var(--border-radius);
				color: hsl(0, 0%, 85%);
				text-shadow: 1px 1px 2px hsl(0, 0%, 15%);
				font-weight: 700;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 25%;
				min-width: 60%;
				grid-area: 1/1;
			}

			a:hover {
				background-color: hsla(0, 0%, 20%, 0.9);
			}

			picture {
				width: 100%;
				height: 100%;
				grid-area: 1/1;
			}
		}
	}
	img {
		aspect-ratio: 16/9;
		border-radius: var(--border-radius);
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.item {
		opacity: 0;
		transition: 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.item:nth-child(1),
	.item:nth-child(3) {
		translate: -100%;
	}

	.item:nth-child(2),
	.item:nth-child(4) {
		translate: 100%;
	}

	.item:global(.show) {
		opacity: 1;
		translate: 0;
	}

	@media (max-width: 680px) {
		.item:nth-child(1),
		.item:nth-child(2),
		.item:nth-child(3),
		.item:nth-child(4) {
			opacity: 1;
			translate: 0;
			transition: none;
		}

		.grid {
			overflow-x: scroll;
			display: flex;
			align-items: center;
			flex-direction: row;
			padding: 1rem;
			gap: 1rem;
			scroll-snap-type: x mandatory;

			div {
				scroll-snap-align: center;
				min-width: min(24rem, 80%);

				a {
					border-radius: 0 0 var(--border-radius) var(--border-radius);
					width: 100%;
					height: 15%;
				}
			}

			img {
				aspect-ratio: 9/16;
			}
		}
	}
</style>
