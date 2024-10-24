<script>
    import { formData, packageTypes, changePackageQty, removePackage } from "./quickQuoteStore.svelte.js";
    import { openModal, closeModal } from "../../modals/modalStore.svelte.js";
    import Field from "../Field.svelte";
    import Icon from "../../reusable-components/Icon.svelte";
    import { slide } from "svelte/transition";
</script>

<div class="package-list">
    {#each $formData.packages as pkg, i (pkg)}
    {@const isOnly = $formData.packages.length <= 1}
        <div class="package" transition:slide>
            <div class="head">
                <h4>Package #{i+1}</h4>
                {#if !isOnly}
                    <button type="button" on:click={() => removePackage(i)}>
                        <Icon name="rubbish" />
                    </button>
                {/if}
            </div>

            <div class="type-weight">
                <Field label="Type" labelId="pkg-{i}-type">
                    <select 
                        id="pkg-{i}-type"
                        bind:value={$formData.packages[i].type}
                    >
                        {#each packageTypes as pkgType}
                            <option value="{pkgType}">
                                {pkgType}
                            </option>
                        {/each}
                    </select>
                </Field>
                <Field label="Weight (kg)" labelId="pkg-{i}-weight">
                    <input type="text" id="pkg-{i}-weight" bind:value={$formData.packages[i].weight} placeholder="KG">
                </Field>
            </div>


            <div class="dimensions">
                <Field label="Length (cm)" labelId="pkg-{i}-length">
                    <input 
                        type="text" 
                        id="pkg-{i}-length"
                        placeholder="CM"
                        bind:value={$formData.packages[i].length}
                    >
                </Field>
                <Field label="Width (cm)" labelId="pkg-{i}-width">
                    <input 
                        type="text" 
                        id="pkg-{i}-width"
                        placeholder="CM"
                        bind:value={$formData.packages[i].width}
                    >
                </Field>
                <Field label="Height (cm)" labelId="pkg-{i}-height">
                    <input 
                        type="text" 
                        id="pkg-{i}-height"
                        placeholder="CM"
                        bind:value={$formData.packages[i].height}
                    >
                </Field>
            </div>

            <div class="quantity">
                <h4>QUANTITY</h4>
                <button type="button" on:click={() => changePackageQty(i, -1)}>
                    <Icon name="minus"/>
                </button>
                <button type="button" class="qty-btn" on:click={() => {
                    openModal("number", {
                        min: 1,
                        max: 1000,
                        onConfirm(v) {
                            $formData.packages[i].qty = v;
                        }
                    })
                }}>
                    {$formData.packages[i].qty}
                </button>
                <button type="button" on:click={() => changePackageQty(i, 1)}>
                    <Icon name="plus"/>
                </button>
            </div>

        </div>
    {/each}
</div>

<style>
    .package-list {
        padding: .5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 600px;
        overflow-y: auto;
    }

    .package {
        background-color: var(--slate);
        color: var(--light);
        padding: .25rem;
        border-radius: .25rem;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--accent);
    }

    .head h4 {
        padding: .5rem;
    }

    .head button {
        padding: .5rem;
    }

    .package button {
        background-color: transparent;
        color: var(--light);
    }

    .type-weight {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: .5rem;
    }

    .type-weight input {
        width: 100%;
    }

    :global(.type-weight .field) {
        display: flex;
        flex-direction: column;
    }

    .dimensions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: .5rem;
        align-items: center;
    }

    .dimensions input {
        width: 100%;
    }

    :global(.dimensions .field) {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
    }

    .quantity {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
    }

    .quantity > button {
        padding: .5rem;
        border-radius: 50%;
    }

    .qty-btn {
        display: inline-block;
        width: 2rem;
        height: 2rem;
    
    }

    .quantity button:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    /* TABLET RULES */
    @media only screen and (min-width: 800px) {
        .package-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>