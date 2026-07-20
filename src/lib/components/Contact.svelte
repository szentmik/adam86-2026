<script>
	import { getContext } from 'svelte';

	const { t } = getContext('i18n');
</script>

<section id="contact" class="section-contact">
	<h1>{t('contactTitle')}</h1>
	<p>{t('contactSubtitle')}</p>
	<div class="flex">
		<div>
			<form action="https://formspree.io/f/mzdnrqzk" method="POST">
				<label for="name">{t('contactFormName')}:</label>
				<input type="text" name="name" autocomplete="off" placeholder={t('contactFormName')} />
				<label for="email">{t('contactFormEmail')}:</label>
				<input type="email" name="email" required autocomplete="off" placeholder={t('contactFormEmail')} />
				<label for="message">{t('contactFormMessage')}:</label>
				<textarea name="message" required autocomplete="off"></textarea>
				<button class="btn" type="submit">{t('contactFormSubmit')}</button>
			</form>
		</div>
	</div>
</section>

<style>
	.section-contact {
		flex-direction: column;
		> p {
			margin-block: 1rem 2rem;
			text-align: center;
		}
	}

	.flex {
		display: flex;
		gap: 2rem;
		width: min(30rem, 100%);

		div {
			flex: 1;
			padding: var(--padding);
		}

		@media (max-width: 992px) {
			flex-direction: column;
		}
	}

	form {
        color: var(--text);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-block: 2rem;
	}

	input,
	textarea {
		--border-radius: 0.5rem;

		border: none;
		border-bottom: 0.05rem solid var(--accent);
		border-radius: var(--border-radius);
		background-color: var(--bg);
        color: var(--text);
		outline: none;
		padding: 0.5rem;
	}

	textarea {
		height: 15rem;
		resize: none;
	}

	input:focus-visible,
	textarea:focus-visible {
		background-color: var(--bg-light);
		box-shadow: 0 0 4px 2px hsla(0, 0%, 50%, 0.5);
	}

	.btn {
		padding-block: 0.5rem;
		align-self: center;
		margin-top: 2rem;
		width: 10rem;
	}
</style>
