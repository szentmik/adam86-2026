<script>
	import { getContext } from 'svelte';

	const { t } = getContext('i18n');
</script>

<section id="problem" class="problem-section">
	<h2>{t('problemTitle')}</h2>

	<div class="grid">
		<div class="card error">
			<i class="fa-solid fa-hand-point-down"></i>

			<h3>{t('problemSubtitle')}</h3>
			<p>
				{t('problemContext')}
			</p>
		</div>

		<div class="card success">
			<i class="fa-solid fa-hand-point-up"></i>
			<h3>{t('solutionSubtitle')}</h3>
			{#each t('solutionContext') as solution, i (i)}
				<p>{@html solution}</p>
			{/each}
		</div>
	</div>
</section>

<style>
	h2 {
		padding-block: 3rem;
	}

	h3{
		padding-block: .5rem 1rem;
	}

	.problem-section {
		flex-direction: column;
	
	}
	.grid {
		align-items: flex-start;
		gap: 2rem;
		p {
			padding-bottom: 1rem;
		}
	}
</style>
