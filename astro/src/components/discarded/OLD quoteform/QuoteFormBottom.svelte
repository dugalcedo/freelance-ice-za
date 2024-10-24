<script>
    import { openModal } from '../../../modals/modalStore.svelte.js'

    export let insuranceRequired;
    export let descriptionOfGoods;
    export let valueOfGoods;
    export let currency;
    export let acceptsTerms;
    export let acceptsDeclaration;
</script>

<div class="bottom">
    <div class="ins-desc-val">
        <div class="field">
            <label for="field_insurance">Insurance<br>required</label>
            <input type="checkbox" id="field_insurance" bind:checked={insuranceRequired}>
        </div>
        <div class="field vert">
            <label for="field_description">Description of goods</label>
            <textarea name="" id="field_description" bind:value={descriptionOfGoods}></textarea>
        </div>
        <div class="field vert">
            <label for="field_value">Value of goods</label>
            <div class="money">
                <input type="text" id="field_value" bind:value={valueOfGoods}>
                <select name="" id="field_currency" bind:value={currency}>
                    <option value="ZAR">ZAR</option>
                </select>
            </div>
        </div>
    </div>
    <div class="bottom-foot">
        <div class="agreements">
            <div class="field">
                <input type="checkbox" id="field_terms" bind:checked={acceptsTerms}>
                <label for="field_terms">I accept and understand the <em>Insurance Terms & Conditions</em></label>
                <button on:click={() => openModal("termsAndConditions")} type="button">
                    [See]
                </button>
            </div>
            <div class="field">
                <input type="checkbox" id="field_declaration" bind:checked={acceptsDeclaration}>
                <label for="field_declaration">I accept the <em>Declaration of Weights & Dimensions</em></label>
                <button type="button" on:click={() => openModal("declarationOfWeights")}>
                    [See]
                </button>
            </div>
        </div>
        <button type="submit" class="accent-btn submit">
            Submit
            <img src="/images/icons/arr-right.svg" alt="right arrow">
        </button>
    </div>
</div>

<style>
    .bottom {
        padding: .5rem;
    }

    .bottom .field {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .ins-desc-val {
        display: flex;
        align-items: center;
        gap: .5rem;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: .5rem;

    }

    .vert {
        display: flex;
        flex-direction: column;
        gap: 0rem;
    }

    textarea {
        resize: none;
    }

    .bottom-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem;
    }

    .agreements {
        font-size: 0.9rem;
    }

    .submit {
        font-size: 1.1rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: .5rem;
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .submit img {
        position: relative;
        top: -2px;
    }

    @media only screen and (max-width: 700px) {
        .ins-desc-val {
            display: flex;
            flex-direction: column;
        }

        .ins-desc-val .field {
            display: grid;
            grid-template-columns: 1fr 2fr;
            width: 100%;
        }

        .money {
            display: flex;
            gap: .5rem;
        }

        .money input {
            flex-grow: 1;
        }
    }

    @media only screen and (max-width: 450px) {
        .ins-desc-val > .field:not(:first-child) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .ins-desc-val .field textarea {
            width: 100%;
        }

        .money {
            width: 100%;
        }

        .agreements .field {
            display: grid;
            grid-template-columns: 1fr 5fr;
        }
        .agreements .field button {
            grid-column: span 2;
        }
    }
</style>