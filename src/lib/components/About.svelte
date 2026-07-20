<script>
	import { getContext } from 'svelte';
    import { intersection } from '$lib';

	import profileImg from '$lib/assets/it_s_me.webp';

	const { t } = getContext('i18n');
</script>

<section id="about" class="about-section">
	<div class="flex">
		<div>
			<h3>Szentmiklóssy Ádám</h3>
	
			<p>
				{t('aboutContent')}
			</p>
		</div>
		<div><img src={profileImg} alt="" use:intersection={0}/></div>
	</div>
</section>

<style>
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		width: var(--content-width);

		> div {
			flex: 1;
		}

		h3 {
			padding-block: 0.5rem 2rem;
		}

		> div:nth-child(2) {
			display: flex;
			justify-content: center;
		}

		img {
			aspect-ratio: 1/1;
            width:70%;
            height:auto;
            object-fit:cover;
            scale: 0;
            opacity: 0;
            transition: .3s ease-in-out;
		}

        img:global(.show){
            opacity: 1;
            scale: 1;
        }
	}

	@media (max-width: 992px) {
		.flex {
			flex-direction: column-reverse;
			gap: 0;
            text-wrap: balance;

			img {
				width: min(15rem, 95%);
			}
		}
	}
</style>
