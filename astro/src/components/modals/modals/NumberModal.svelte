<script>
    import { closeModal, modalStore } from '../modalStore.svelte.js';
    let val = $modalStore.def;
    let errMsg = "";

    const submit = () => {
        errMsg = "";
        let n = Number(val);

        if (isNaN(n)) {
            errMsg = `Invalid number.`;
            return
        }

        if (n < $modalStore.min || n > $modalStore.max) {
            errMsg = `Must be between ${$modalStore.min} and ${$modalStore.max}.`;
            return
        }

        $modalStore.onConfirm(n);
        closeModal();
    }

    let submitBtn;
</script>

<div class="modal-window">
    <div class="head">
        <h2>Enter a number</h2>
        <button on:click={closeModal}>
            X
        </button>
    </div>
    <div class="body">
        <input type="text" bind:value={val} on:keypress={e => {
            if (e.key === "Enter") submitBtn.click();
        }}>
        <button on:click={submit} bind:this={submitBtn}>
            Submit
        </button>
        <div class="error">
            {errMsg}
        </div>
    </div>
</div>

<style>
    .body {
        display: grid;
        grid-template-columns: 3fr 1fr;
    }

    .body input {
        border-right: 0;
    }

    .error {
        grid-column: span 2;
        min-height: 2ch;
        color: maroon;
        font-weight: bold;
    }

    .body button {
        border: 1px solid var(--accent);
    }
</style>