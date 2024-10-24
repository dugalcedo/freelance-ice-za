<script>
    import { offers } from './whatWeOffer.js'
    import { fade } from 'svelte/transition';

    const icons = offers.map(o => o.icon);
    let activeIconIndex = Math.floor(Math.random()*icons.length);

    const INTERVAL_MS = 3750;
    let interval;

    const updateIndex = (index) => {
        activeIconIndex = index;
    }

    const resetInterval = (index = null) => {
        clearInterval(interval);
        if (index !== null) updateIndex(index);
        interval = setInterval(() => {
            let nextIndex = activeIconIndex + 4;
            if (nextIndex > (icons.length-1)) {
                nextIndex = nextIndex - icons.length;
            }
            updateIndex(nextIndex)
        }, INTERVAL_MS);
    }

    resetInterval()
</script>

<section class="container-outer">
    {#each icons as icon, i}
        {#if activeIconIndex === i}
            <img 
                src="/images/icons/{icon}" 
                alt="{icon.replace('.svg','')} icon" 
                class="bg"
                transition:fade
            >
        {/if}
    {/each}
    <section id="what-we-offer" class="container-inner">
        <h2>What we offer</h2>
        <div class="offers">
            {#each offers as offer, i}
                <a class="offer" class:active={activeIconIndex === i} href="/offers">
                    <div 
                        class="icon"
                        on:mouseover={()=>resetInterval(i)}
                        on:focus={()=>resetInterval(i)}
                        tabindex="-1"
                        role="figure"
                    >
                        <img src="/images/icons/{offer.icon}" alt="{offer.icon.replace('.svg','')}">
                    </div>
                    <p>
                        {offer.title}
                    </p>
                </a>
            {/each}
        </div>
    </section>
</section>

<style>
    .container-outer {
        background-image: linear-gradient(125deg, var(--accent), var(--accent-light));
        padding: 6rem 0rem;
        position: relative;
        width: 100%;
        overflow-x: hidden;
    }


    .bg {
        height: 80%;
        position: absolute;
        right: 0;
        bottom: 0;
        filter: invert(1);
        z-index: 1;
        translate: -30% 0%;
        opacity: 0.2;
    }

    h2 {
        font-size: 10rem;
        color: var(--light);
        text-align: center;
        margin-bottom: 3rem;
        text-transform: uppercase;
        position: absolute;
        top: 1rem;
        left: 3rem;
        opacity: 0.3;
        z-index: 1;
    }

    .offers {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
        position: relative;
        z-index: 2;
    }

    .offer {
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0.8;
        text-decoration: none;
    }

    .offer p {
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        width: 150px;
        text-align: center;
    }

    .offer .icon {
        display: inline-block;
        padding: 1rem;
        border-radius: 50%;
        margin-bottom: 1.5rem;
        cursor: pointer;

        background-color: var(--accent);
        border: 4px solid var(--accent);
        outline: 5px solid var(--light);
    }

    .offer .icon img {
        filter: invert(1);
    }

    .offer.active {
        transform: scale(1.5);
        opacity: 1;
    }

    .offer.active .icon {
        background-color: var(--light);
        border: 4px solid var(--accent2);
        outline: 5px solid var(--light);

        margin-bottom: 1rem;
    }

    .offer.active p {
        background-color: var(--accent);
        border-radius: 300px;
    }

    .offer.active .icon img {
        filter: invert(0);
    }

    .offer .icon img {
        width: 50px;
        display: block;
    }

    .offer, .offer .icon, .offer img, .offer p {
        transition: all 1s;
    }

    @media only screen and (max-width: 650px) {
        .offers {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media only screen and (max-width: 400px) {
        .offers {
            grid-template-columns: 1fr;
        }
    }
</style>