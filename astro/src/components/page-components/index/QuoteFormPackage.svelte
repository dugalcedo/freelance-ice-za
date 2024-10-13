<script>
    export let pkg;
    // export let isLast;
    export let isOnly;
    export let removePackage;
    // export let addPackage;
    export let i;

    const packageTypes = [
        'Flyer',
        'Box',
        'Crate',
        'Pallet'
    ]

    function changeQtyBy(amt) {
        let newQty = pkg.qty + amt;
        if (newQty < 1) return;
        pkg.qty = newQty;
    }
</script>

<div class="package">
    <div class="type">
        <label for="pkg-typ-{i}">Package type</label>
        <select id="pkg-typ-{i}" bind:value={pkg.type}>
            {#each packageTypes as type}
                <option value="{type}">{type}</option>
            {/each}
        </select>
    </div>
    <div class="dimensions">
        <div class="field">
            <label for="pkg-len-{i}">Length</label>
            <input id="pkg-len-{i}" type="text" placeholder="cm" bind:value={pkg.length}>
        </div>
        <div class="field">
            <label for="pkg-wid-{i}">Width</label>
            <input id="pkg-wid-{i}" type="text" placeholder="cm" bind:value={pkg.width}>
        </div>
        <div class="field">
            <label for="pkg-hei-{i}">Height</label>
            <input id="pkg-hei-{i}" type="text" placeholder="cm" bind:value={pkg.height}>
        </div>
        <div class="field">
            <label for="pkg-wei-{i}">Weight</label>
            <input id="pkg-wei-{i}" type="text" placeholder="kg" bind:value={pkg.weight}>
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
        border: 1px solid var(--gray);
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