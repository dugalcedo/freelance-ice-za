<script>
    export let pkg;
    // export let isLast;
    export let isOnly;
    export let removePackage;
    // export let addPackage;
    export let i;

    function changeQtyBy(amt) {
        let newQty = pkg.qty + amt;
        if (newQty < 1) return;
        pkg.qty = newQty;
    }
</script>

<div class="package">
    <div class="dimensions">
        <div class="field">
            <label for="">Length</label>
            <input type="text" placeholder="cm">
        </div>
        <div class="field">
            <label for="">Width</label>
            <input type="text" placeholder="cm">
        </div>
        <div class="field">
            <label for="">Height</label>
            <input type="text" placeholder="cm">
        </div>
        <div class="field">
            <label for="">Weight</label>
            <input type="text" placeholder="kg">
        </div>
    </div>
    <div class="quantity">
        <button on:click={()=>changeQtyBy(1)} type="button">
            <img src="/images/icons/plus.svg" alt="plus">
        </button>
        Qty: {pkg.qty}
        <button on:click={()=>changeQtyBy(-1)} type="button">
            <img src="/images/icons/minus.svg" alt="minus">
        </button>
    </div>
    {#if !isOnly}
        <button type="button" on:click={()=>removePackage(i)} class="del">
            <img src="/images/icons/rubbish.svg" alt="rubbish can">
        </button>
    {/if}
</div>

<style>
    .package {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
    }

    .package img {
        filter: invert(1) brightness(3);
    }

    .dimensions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .5rem;
        border: 1px solid var(--light);
        padding: .5rem;
        border-radius: .25rem;
    }

    .dimensions .field {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .dimensions .field label {
        width: 50px;
    }

    .dimensions .field input {
        width: 50px;
    }

    .quantity {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }

    .quantity button {
        background-color: transparent;
        aspect-ratio: 1;
        padding: .25rem;
        border-radius: 50%;
    }

    .quantity button:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .del {
        background-color: transparent;
        padding: .25rem;
        aspect-ratio: 1;
    }

    .del:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
</style>