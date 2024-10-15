<script>
    import QuoteFormPackage from './QuoteFormPackage.svelte';

    export let addPackage;
    export let removePackage;
    export let packages;
</script>

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

<style>
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
</style>