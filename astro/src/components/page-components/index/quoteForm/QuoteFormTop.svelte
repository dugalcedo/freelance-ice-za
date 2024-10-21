<script>
    import { slide } from 'svelte/transition';

    export let isInternational;
    export let isImport;
    export let shippingTypes;

    export let from;
    export let to;
    export let fromCountry;
    export let toCountry;
    export let senderType;
    export let recipientType;

    $: if (isInternational) {
        if (isImport) {
            toCountry = "South Africa";
            fromCountry = "";
        } else {
            toCountry = "";
            fromCountry = "South Africa";
        }
    }

</script>

<div class="top">
    {#if isInternational}
        <div class="imp-or-exp" transition:slide>
            <button type="button" class:active={isImport} on:click={()=>isImport = true}>
                Import
            </button>
            <button type="button" class:active={!isImport} on:click={()=>isImport = false}>
                Export
            </button>
        </div>
    {/if}
    <div class="top-fields">
        {#if isInternational}
            <div class="field" transition:slide>
                <label for="field_fromCountry">Starting<br>country</label>
                <input id="field_fromCountry" type="text" disabled={!isImport} bind:value={fromCountry}>
            </div>
            <div class="field" transition:slide>
                <label for="field_toCountry">Destination<br>country</label>
                <input id="field_toCountry" type="text" disabled={isImport} bind:value={toCountry}>
            </div>
        {/if}
        <div class="field">
            <label for="field_from">
                From
                {#if isInternational && isImport}
                    <br><small>(Town or zip code)</small>
                {/if}
            </label>
            <input id="field_from" type="text" placeholder="Collection town" bind:value={from}>
        </div>
        <div class="field">
            <label for="field_to">
                To
                {#if isInternational && !isImport}
                    <br><small>(Town or zip code)</small>
                {/if}
            </label>
            <input id="field_to" type="text" placeholder="Delivery town" bind:value={to}>
        </div>
        <div class="field">
            <label for="field_senderType">Sender type</label>
            <select name="" id="field_senderType" bind:value={senderType}>
                {#each shippingTypes as type}
                    <option value="{type}">{type}</option>
                {/each}
            </select>
        </div>
        <div class="field">
            <label for="field_recipientType">Recipient type</label>
            <select name="" id="field_recipientType" bind:value={recipientType}>
                {#each shippingTypes as type}
                    <option value="{type}">{type}</option>
                {/each}
            </select>
        </div>
    </div>
</div>

<style>
    .top {
        /* margin-bottom: 0.5rem; */
        padding: 0.5rem 1rem;
    }

    .imp-or-exp {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: .5rem;
    }

    .imp-or-exp button {
        border: 3px outset var(--light);
    }

    .top-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;

    }

    .top .field {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .top .field input, .top .field select {
        width: 100%;
    }

    .active {
        background-color: var(--accent) !important;
        color: var(--light) !important;
        border: 4px inset var(--accent) !important;
    }

    @media only screen and (max-width: 600px) {
        .top-fields {
            grid-template-columns: 1fr;
        }
    }
</style>