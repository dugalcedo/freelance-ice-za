<script>
    import { tiers } from './serviceTiers.js'

    const getNowAnchors = [];
</script>

<section class="container-outer">
    <img src="/images/icons/world.svg" alt="globe" id="bg">
    <section id="service-tiers" class="container-inner">
        {#each tiers as t, i}
            <div 
                class="service-tier"
                tabindex="-1"
                role="link"
                on:click={() => getNowAnchors[i].click()}
                on:keypress={() => getNowAnchors[i].click()}
            >
                <h3>{t.title} &rarr;</h3>
                <p>
                    <small>From</small>
                    <span>R{t.from}</span>
                </p>
                <div>
                    <ul>
                        {#each t.features as f}
                            <li>{@html f}</li>
                        {/each}
                    </ul>
                    <a href="#" bind:this={getNowAnchors[i]}>
                        <button>
                            Get now &rarr;
                        </button>
                    </a>
                </div>
            </div>
        {/each}
    </section>
</section>

<style>
    .container-outer {
        overflow: hidden;
        position: relative;
        background-image: linear-gradient(white, var(--light-gray));
    }

    #bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 150%;
        translate: 0 -17.5%;
        z-index: 1;
        pointer-events: none;
        opacity: 0.2;
    }

    #service-tiers {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 10rem 0rem;
    }

    .container-inner {
        position: relative;
        z-index: 2;
    }

    .service-tier {
        width: 300px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 1s;
        user-select: none;
    }

    .service-tier:hover {
        transform: scale(1.1);
    }

    .service-tier h3 {
        background-color: var(--accent2);
        color: var(--slate);
        padding: 0.5rem;
        text-transform: uppercase;
        font-size: 1.3rem;
    }

    .service-tier p {
        background-color: var(--dark-gray);
        color: var(--light);
        padding: 0.5rem;
        font-size: 1.8rem;
        text-transform: uppercase;
    }

    .service-tier p small {
        font-size: 1.1rem;
    }

    .service-tier p span {
        font-weight: bold;
    }

    .service-tier ul {
        list-style-type: square;
        padding: 0.5rem 0rem 0.5rem 1.5rem;
    }

    .service-tier div {
        background-color: var(--light);
    }

    .service-tier a {
        display: block;
        text-align: right;
    }

    @media only screen and (max-width: 950px) {
        #service-tiers {
            flex-direction: column;
        }
    }
</style>