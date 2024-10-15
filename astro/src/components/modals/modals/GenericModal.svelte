<script>
    import { modalStore, closeModal } from '../modalStore.svelte.js'
</script>

<div class="modal-window">
    <div class="head">
        <h2>{@html $modalStore.heading || "Generic modal"}</h2>
        <button on:click={closeModal}>
            X
        </button>
    </div>
    <div class="body">
        <p>{@html $modalStore.body || "Generic modal"}</p>
    </div>
</div>