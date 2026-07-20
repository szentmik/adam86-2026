<script>
	let y = $state(0);


    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

	$effect(() => {
		document.addEventListener('scroll', () => {
			y = window.scrollY;
		});
	});
</script>

{#if y > 1000}
		<button onclick={toTop} aria-label="scroll to top"><i class="fa-solid fa-circle-up"></i></button>
{/if}

<style>
	button {
        background-color: transparent;
        border: none;
        color: var(--text-strong);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4rem;
		height: 4rem;

		position: fixed;
		bottom: .5rem;
		right: .5rem;

        animation: fade-in 2s ease-in-out;
	}

    @keyframes fade-in {
        from {opacity: 0}
        to {opacity: 1}
    }
</style>
