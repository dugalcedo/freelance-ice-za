<script>
    import { slide } from 'svelte/transition';
    import { formData, collectionTypes, addPackage } from './quickQuoteStore.svelte.js';
    import { openModal, openGenericModal } from '../../modals/modalStore.svelte.js';
    import Field from '../Field.svelte';
    import Icon from '../../reusable-components/Icon.svelte';
    import MobilePackageList from './PackageList.svelte';
    import { isPreview } from '../../../assets/util/index.js';

    const handleSubmit = () => {
        if (isPreview()) {
            openGenericModal(
                "This window only appears in preview mode",
                "Here is the data collected from the form: <br><pre>" + JSON.stringify($formData, null, 2) + "</pre>"
            )
        } else {

        }
    }
</script>

<form class="quick-quote" on:submit|preventDefault={handleSubmit}>
    <!-- shipment type toggles -->
    <section class="shipment-type">

        <div class="scope">
            <button 
                type="button" 
                class:active={!$formData.isInternational}
                on:click={() => $formData.isInternational = false}
            >
                <Icon name="south-africa.png" width="20px" />
                LOCAL
            </button>
            <button 
                type="button" 
                class:active={$formData.isInternational}
                on:click={() => $formData.isInternational = true}
            >
                <Icon name="world" width="25px" />
                INTL
            </button>
        </div>
        <!-- end scope -->

        {#if $formData.isInternational}
            <div class="direction" transition:slide>
                <button 
                    type="button" 
                    class:active={$formData.isImport}
                    on:click={() => $formData.isImport = true}
                >
                    IMPORT
                </button>
                <button 
                    type="button" 
                    class:active={!$formData.isImport}
                    on:click={() => $formData.isImport = false}
                >
                    EXPORT
                </button>
            </div>
        {/if}
    </section>
    <!-- sender/recipient info -->
    <section class="send-recip">
        <div class="sender">
            <h3>FROM</h3>
            {#if $formData.isInternational}
                <Field label="Sender country" labelId="fromCountry">
                    <input 
                        type="text" 
                        id="fromCountry" 
                        bind:value={$formData.fromCountry}
                        disabled={!$formData.isImport}
                    >
                </Field>
            {/if}
            <Field label="Sender town" labelId="fromTown">
                <input type="text" id="fromTown" bind:value={$formData.fromTown}>
            </Field>
            <Field label="Sender type" labelId="fromType">
                <select id="fromType" bind:value={$formData.fromType}>
                    {#each collectionTypes as type}
                        <option value="{type}">{type}</option>
                    {/each}
                </select>
            </Field>
        </div>
        <div class="recipient">
            <h3>TO</h3>
            {#if $formData.isInternational}
                <Field label="Recipient country" labelId="toCountry">
                    <input 
                        type="text" 
                        id="toCountry" 
                        bind:value={$formData.toCountry}
                        disabled={$formData.isImport}
                    >
                </Field>
            {/if}
            <Field label="Recipient town" labelId="toTown">
                <input type="text" id="toTown" bind:value={$formData.toTown}>
            </Field>
            <Field label="Recipient type" labelId="toType">
                <select id="toType" bind:value={$formData.toType}>
                    {#each collectionTypes as type}
                        <option value="{type}">{type}</option>
                    {/each}
                </select>
            </Field>
        </div>
    </section>
    <!-- end send-recip -->
    <!-- packages -->
    <section class="packages">
        <div class="head">
            <h3>PACKAGES</h3>
            <button type="button" on:click={addPackage}>
                ADD PACKAGE
            </button>
        </div>
        <MobilePackageList />
    </section>

    <!-- bottom -->
    <section class="bottom">
        <Field label="Description of goods" labelId="description">
            <textarea id="description" bind:value={$formData.description}></textarea>
        </Field>

        <Field label="Value of goods (ZAR)" labelId="value">
            <input type="text" id="value" bind:value={$formData.value} />
        </Field>

        <Field label="Insurance required" labelId="insuranceRequired">
            <input 
                type="checkbox"
                id="insuranceRequired"
                bind:checked={$formData.insuranceRequired}
            >
        </Field>

        <div class="field">
            <label for="acceptsTerms">
                I accept the
                <a role="button" href="#" on:click|preventDefault={() => openModal("termsAndConditions")}>
                    Insurance Terms and Conditions
                </a>
            </label>
            <input 
                type="checkbox"
                id="acceptsTerms"
                bind:checked={$formData.acceptsTerms}
            >
        </div>

        <div class="field">
            <label for="acceptsDeclaration">
                I accept the
                <a role="button" href="#" on:click|preventDefault={() => openModal("declarationOfWeights")}>
                    Declaration of Weights and Dimensions
                </a>
            </label>
            <input 
                type="checkbox"
                id="acceptsDeclaration"
                bind:checked={$formData.acceptsDeclaration}
            >
        </div>

        <button class="submit" type="submit">
            LIVE QUOTE & BOOK
        </button>

    </section>
</form>

<style>
    form {
        width: 1000px;
        max-width: calc(100% - 2rem);
        margin: auto;
        background-color: var(--light);
        color: var(--slate);
        border-radius: .5rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }

    .scope, .direction {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .scope button {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .scope button.active {
        border-top: 5px solid var(--accent);
    }

    :global(.scope button:not(.active) img) {
        filter: invert(1) !important;
    }

    .scope button:not(.active) {
        background-color: var(--gray);
        color: var(--light);
        opacity: 0.5;
    }

    .direction {
        padding: .5rem;
    }

    .direction button.active {
        font-weight: bold;
        border: 1px solid var(--accent2);
        color: var(--accent2);
        border-bottom: 5px solid var(--accent2);
    }

    :global(.quick-quote button:not(.active) img) {
        filter: invert(1);
    }

    .packages {
        background-color: var(--light-gray);
        padding: 0.5rem 0;
    }

    .packages .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: .5rem;
    }

    .packages .head h3 {
        padding: .5rem;
    }

    .packages .head button {
        padding: .5rem;
        background-color: var(--accent2);
        color: var(--light);
    }

    .send-recip {
        padding: .5rem;

        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .sender, .recipient {
        padding: .5rem;
        border: 1px solid var(--light-gray);
    }

    :global(.quick-quote .send-recip .field) {
        display: flex;
        flex-direction: column;
    }

    .bottom {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: .5rem;
    }

    :global(.quick-quote .bottom .field:not(:has(input[type="checkbox"]))) {
        display: flex;
        flex-direction: column;
    }

    :global(.quick-quote .bottom .field:has(input[type="checkbox"])) {
        display: grid;
        grid-template-columns: 8fr 1fr;
        align-items: center;

        & input {
            /* width: 20px; */
            height: 25px;
        }
    }

    .submit {
        background-color: var(--accent2);
        color: white;
    }

    .submit:hover {
        filter: brightness(1.5);
    }

    .bottom textarea {
        resize: none;
        height: 8ch;
    }

    /* TABLET SIZE */
    @media only screen and (min-width: 800px) {
        .send-recip {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

</style>