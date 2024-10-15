<script>
    import QuoteFormPackage from './QuoteFormPackage.svelte'
    import { openModal } from '../../modals/modalStore.svelte.js'
    import { slide } from 'svelte/transition'

    const shippingTypes = [
        'Business',
        'Residential',
        'Farm/Game reserve',
        'Freightguard',
        'Mine/Powerstation',
        'Chainstore/Dc',
        'Embassy'
    ]

    const defaultPackage = () => {
        return {
            length: "",
            width: "",
            height: "",
            weight: "",
            qty: 1,
            type: "Flyer"
        }
    }

    let packages = [
        defaultPackage()
    ]

    function addPackage() {
        packages = [
            ...packages,
            defaultPackage()
        ]
    }

    function removePackage(i) {
        const newPackages = [...packages];
        newPackages.splice(i, 1);
        packages = newPackages;
    }

    // state
    let isInternational = false;
    let isImport = false;
</script>

<form>
    <div class="head">
        <div>
            <h2>Quick quote</h2>
            <em>{isInternational ? "International" : "Domestic"}</em>
        </div>
        <div class="int-or-dom">
            <button
                class:active={!isInternational}
                type="button"
                on:click={()=>isInternational = false}
            >
                <img src="/images/icons/south-africa.png" alt="south african flag" id="sa-flag-icon">
                Domestic
            </button>
            <button
                class:active={isInternational}
                type="button"
                on:click={()=>isInternational = true}
            >
                <img src="/images/icons/world.svg" alt="globe icon" id="world-icon">
                International
            </button>
        </div>
    </div>
    <!-- top -->
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
                    <label for="">Starting<br>country</label>
                    <input type="text" disabled={!isImport} value={!isImport ? "South Africa" : ""}>
                </div>
                <div class="field" transition:slide>
                    <label for="">Destination<br>country</label>
                    <input type="text" disabled={isImport} value={isImport ? "South Africa" : ""}>
                </div>
            {/if}
            <div class="field">
                <label for="">
                    From
                    {#if isInternational && isImport}
                        <br><small>(Town or zip code)</small>
                    {/if}
                </label>
                <input type="text" placeholder="Collection town">
            </div>
            <div class="field">
                <label for="">
                    To
                    {#if isInternational && !isImport}
                        <br><small>(Town or zip code)</small>
                    {/if}
                </label>
                <input type="text" placeholder="Delivery town">
            </div>
            <div class="field">
                <label for="">Sender type</label>
                <select name="" id="">
                    {#each shippingTypes as type}
                        <option value="{type}">{type}</option>
                    {/each}
                </select>
            </div>
            <div class="field">
                <label for="">Recipient type</label>
                <select name="" id="">
                    {#each shippingTypes as type}
                        <option value="{type}">{type}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
    <!-- end top -->
    <!-- packages -->
    <div class="middle">
        <div class="middle-head">
            <h5>Packages</h5>
            <button on:click={addPackage} type="button" class="accent2-btn">
                + Add package
            </button>
        </div>
        <div class="packages">
            {#each packages as pkg, i (pkg)}
            {@const isLast = i == (packages.length-1)}
            {@const isOnly = packages.length <= 1}
                <QuoteFormPackage
                    {isOnly}
                    {i}
                    {pkg}
                    {removePackage}
                />
            {/each}
        </div>
    </div>
    <!-- end packages -->
    <!-- bottom -->
    <div class="bottom">
        <div class="ins-desc-val">
            <div class="field">
                <label for="">Insurance<br>required</label>
                <input type="checkbox">
            </div>
            <div class="field">
                <label for="">Description of goods</label>
                <textarea name="" id=""></textarea>
            </div>
            <div class="field">
                <label for="">Value of goods</label>
                <textarea name="" id=""></textarea>
            </div>
        </div>
        <div class="bottom-foot">
            <div class="agreements">
                <div class="field">
                    <input type="checkbox">
                    <label for="">I accept and understand the <em>Insurance Terms & Conditions</em></label>
                    <button on:click={() => openModal("termsAndConditions")} type="button">
                        [See]
                    </button>
                </div>
                <div class="field">
                    <input type="checkbox">
                    <label for="">I accept the <em>Declaration of Weights & Dimensions</em></label>
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
    <!-- end bottom -->
    <!-- backgrounds -->
    <div class="backgrounds">
        <!-- <img src="/images/world-outline.jpg" alt="map of world" class:hidden={!isInternational}> -->
        <!-- <img src="/images/south-africa-outline.jpg" alt="map of south africa" class:hidden={isInternational}> -->
    </div>
</form>

<style>
    form {
        width: 700px;
        background-color: #ebebeb;
        color: var(--slate);
        /* padding: 1rem; */
        position: relative;
        border-radius: 1rem .5rem 1rem .5rem;
        border: 5px solid var(--gray);
        border-bottom: 15px solid var(--accent2);
        /* outline: 2px solid var(--accent); */
    }

    form > *:not(.backgrounds) {
        position: relative;
        z-index: 2;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* margin-bottom: .75rem; */
        padding: 1rem;
        background-color: var(--gray);
        color: var(--light);
    }


    .int-or-dom {
        display: flex;
    }

    .head button {
        font-size: 1.5rem;
        display: inline-flex;
        align-items: center;
        gap: 1ch;
        padding: .25rem .75rem;
        border: 4px outset var(--light);
        transition: 250ms;
    }

    .head button img {
        width: 30px;
        transition: 250ms;
    }

    #world-icon {
        width: 40px;
        margin: -0.25rem -0.5rem;
    }

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

    .middle-head {
        text-align: center;
        background-color: var(--slate);
        color: var(--light);
        padding: calc(.25rem + 3px) 0;
        position: relative;
        font-size: 1rem;
    }

    .middle-head button {
        position: absolute;
        right: 0;
        top: 0;
        padding: .25rem 1rem;
    }



    .packages {
        /* background-color: var(--gray); */
        /* color: var(--light); */
        max-height: 300px;
        overflow-y: auto;
        border-bottom: 4px solid var(--slate);

        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    :global(.packages > .package:nth-child(even)) {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .active {
        background-color: var(--accent);
        color: var(--light);
        border: 4px inset var(--accent) !important;
    }

    .active img {
        filter: invert(1);
    }

    .backgrounds {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

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

    .field:has(textarea) {
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
</style>