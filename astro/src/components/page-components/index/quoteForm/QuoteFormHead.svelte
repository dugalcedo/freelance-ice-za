<script>
    export let isInternational;
</script>

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

<style>
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* margin-bottom: .75rem; */
        padding: 1rem;
        background-color: var(--gray);
        color: var(--light);
    }

    .head button img {
        width: 30px;
        transition: 250ms;
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

    #world-icon {
        width: 40px;
        margin: -0.25rem -0.5rem;
    }

    .active {
        background-color: var(--accent) !important;
        color: var(--light) !important;
        border: 4px inset var(--accent) !important;
    }

    .active img {
        filter: invert(1);
    }
</style>