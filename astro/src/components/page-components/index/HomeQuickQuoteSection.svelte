<script>
    import QuoteForm from './quoteForm/QuoteForm.svelte'
</script>

<section class="container-outer" id="home-quick-quote">
    <section class="container-inner">
        <div class="text">
            <h2>Get an instant quote</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus ullam odit. Assumenda, soluta veritatis optio alias perferendis sint veniam facilis aliquid quos! Debitis omnis suscipit obcaecati quaerat eius temporibus, officia facere adipisci quidem rem, optio ea soluta totam laboriosam!
            </p>
        </div>
        <QuoteForm />
    </section>
    <img src="/images/icons/truck.svg" alt="truck icon" class="accent-img" id="truck">
    <!-- <img src="/images/icons/package.svg" alt="package icon" class="accent-img" id="pkg"> -->
</section>

<style>
    .container-outer {
        position: relative;
        overflow: hidden;
    }

    #home-quick-quote {
        background-color: var(--slate);
        color: var(--light);
        padding: 4rem 0rem;
    }

    .container-inner {
        display: grid;
        position: relative;
        z-index: 2;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: 2rem;
    }

    .accent-img {
        position: absolute;
        z-index: 1;
        width: 600px;
        opacity: 0.1;
    }

    #truck {
        top: 5%;
        left: 5%;
    }

    @media only screen and (max-width: 1100px) {
        .container-inner {
            display: flex;
            flex-direction: column;
            align-content: inherit;
        }

        .text {
            width: 700px;
            max-width: 100%;
        }
    }
</style>