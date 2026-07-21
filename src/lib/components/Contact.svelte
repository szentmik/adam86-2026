<script>
	import { getContext } from 'svelte';
	import { PUBLIC_WEB3FORM_KEY } from '$env/static/public';

	const { t } = getContext('i18n');

	let status = $state({ type: '', message: '' });

	const handleSubmit = async (event) => {
		event.preventDefault();

		status = 'Küldés...';

		const formData = new FormData(event.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: json
			});
			const result = await response.json();
			if (result.success) {
				console.log(result);
				status = { type: 'success', message: 'Küldés sikeres.' }; //result.message || 'Sikerült.';
			} else {
				status = { type: 'fail', message: 'Hiba történt.' }; //result.message || 'Hiba történt.';
			}
		} catch {
			status = { type: 'error', message: 'Hálózati hiba.' }; //'Hálózati hiba.';
		}
	};
</script>

<section id="contact" class="section-contact">
	<h1>{t('contactTitle')}</h1>
	<p>{t('contactSubtitle')}</p>
	<div class="flex">
		<div>
			<!-- <form action="https://formspree.io/f/mzdnrqzk" method="POST"> -->
			<form onsubmit={handleSubmit}>
				<input type="hidden" name="access_key" value={PUBLIC_WEB3FORM_KEY} />
				<label for="name">{t('contactFormName')}:</label>
				<input
					type="text"
					id="name"
					name="name"
					autocomplete="off"
					placeholder={t('contactFormName')}
				/>
				<label for="email">{t('contactFormEmail')}:</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					autocomplete="off"
					placeholder={t('contactFormEmail')}
				/>
				<label for="message">{t('contactFormMessage')}:</label>
				<textarea name="message" required autocomplete="off"></textarea>
				<button class="btn" type="submit">{t('contactFormSubmit')}</button>
			</form>
		</div>
	</div>
	{#if status.type == 'success'}
		<div class="status"><p>{status.message}</p></div>
	{:else if status.type == 'fail' || status.type == 'error'}
		<div class="status" style="background-color: hsla(0, 30%, 30%, 0.5);">
			<p>{status.message}</p>
		</div>
	{/if}
</section>

<style>
	.section-contact {
		position: relative;
		flex-direction: column;
		> p {
			margin-block: 1rem 2rem;
			text-align: center;
		}
	}

	.flex {
		position: relative;
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
		position: relative;
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

	.status {
		background-color: hsla(180, 30%, 30%, 0.5);
		color: hsl(0, 0%, 95%);
		position: absolute;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		font-size: 2rem;
		width: 100%;
		height: 100%;
		transition: .3s ease-in;
	}
</style>
