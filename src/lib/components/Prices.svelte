<script>
	import { getContext } from 'svelte';
	import { intersection } from '$lib';

	const { t } = getContext('i18n');
</script>

<section id="price" class="price-section">
	<h2>{t('priceTitle')}</h2>
	<div class="grid">
		<div class="grid-item" use:intersection>
			<div><i class="fa-solid fa-money-bill-wave"></i></div>
			<div>
				<h3>{t('priceSubtitle1')}</h3>
				<p>{t('priceQuote1')}</p>
			</div>
			<ul>
				{#each t('priceListItem1') as listItem, i (i)}
					<li>{listItem}</li>
				{/each}
			</ul>

			<p class="prices">{@html t('price1')}</p>
		</div>
		<div class="grid-item" use:intersection>
			<div><i class="fa-solid fa-money-bill-wave"></i></div>
			<div>
				<h3>{t('priceSubtitle2')}</h3>
				<p>{t('priceQuote2')}</p>
			</div>
			<ul>
				{#each t('priceListItem2') as listItem, i (i)}
					<li>{listItem}</li>
				{/each}
			</ul>

			<p class="prices">{@html t('price2')}</p>
		</div>
		<div class="grid-item" use:intersection>
			<div><i class="fa-solid fa-money-bill-wave"></i></div>
			<div>
				<h3>{t('priceSubtitle3')}</h3>
				<p>{t('priceQuote3')}</p>
			</div>
			<ul>
				{#each t('priceListItem3') as listItem, i (i)}
					<li>{listItem}</li>
				{/each}
			</ul>
			<p class="prices">{@html t('price3')}</p>
		</div>
	</div>
	<div class="price-desc">
		<p>
			{t('priceDescription')}
		</p>
	</div>
</section>

<style>
	.price-section {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		gap: 3rem;
	}

	.grid {
		--grid-col: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));

		/* gap: 2rem; */
	}

	.grid-item {
		border-radius: var(--border-radius);
		box-shadow: var(--card-shadow);
		display: grid;
		height: 100%;
		grid-template-rows: repeat(2, auto) 1fr auto;
		gap: 0.75rem;
		margin-bottom: 2rem;
		padding: 1rem;

		transition:
			transform 0.8s ease,
			opacity 0.8s ease,
			box-shadow 0.25s ease-in-out;
		transform: translateX(-100%);
		opacity: 0;

		ul {
			list-style-type: none;
			padding-left: 1rem;
		}

		.prices {
			display: flex;
			align-items: center;
			width: 100%;
		}
		:global(span) {
			font-size: 1.25rem;
			font-weight: 700;
			margin-inline: auto 0.5rem;
		}
	}

	.grid-item:first-child {
		transition-delay: 0.4s;
	}

	.grid-item:nth-child(2) {
		transition-delay: 0.2s;
	}

	@media (max-width: 764px) {
		.grid-item {
			transition-delay: 0s !important;
		}

		.grid-item:nth-child(odd) {
			transform: translateX(-100%);
		}
		.grid-item:nth-child(even) {
			transform: translateX(100%);	
		}
	}

	.grid-item:global(.show) {
		opacity: 1;
		transform: translateX(0);
	}

	.grid-item:hover {
		box-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 5%, 95%, 1);
	}

	.price-desc {
		width: min(40rem, 95%);
	}

	h3 {
		font-size: 1.1rem;
		letter-spacing: -0.05rem;
		padding-block: 1rem -0.5rem;
	}
</style>
