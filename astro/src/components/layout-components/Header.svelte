<script>
    import HeaderNav from './HeaderNav.svelte'
</script>

<div id="header-wrapper">
    <header class="container">
        <div class="logo large">
            <img src="/images/logo.png" alt="Logo which reads 'ICE XPRESS, INTERNATIONAL COURIER EXPRESS'">
        </div>
        <div class="logo small">
            <img src="/images/logo.webp" alt="ICEXpress Logo">
        </div>

        <HeaderNav />

        <div class="contact">
            <img src="/images/icons/phone.svg" alt="phone icon">
            <div>
                <p class="contact-us">Contact us</p>
                <p>031 0300 300</p>
                <p>
                    086 9990 559
                    <small>(intl.)</small>
                </p>
            </div>
        </div>

    </header>
</div>


<style>
    #header-wrapper {
        position: relative;
        background-color: var(--dark-gray);
    }

    header {
        display: flex;
    }

    :global(header > *) {
        position: relative;
        z-index: 51;
    }

    header .logo {
        padding: 1rem 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :global(header nav) {
        flex-grow: 1;
    }

    header .contact {
        padding: 1rem 4rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: var(--accent);
        z-index: 0;
        border-top: 15px solid var(--gray);
        gap: 1rem;
        color: white;
    }

    header .contact-us {
        font-weight: bold;
        text-transform: uppercase;
    }

    .logo.small {
        display: none;
    }

    @media only screen and (max-width: 940px) {
        .logo.large {
            display: none;
        }

        .logo.small {
            display: flex;
            padding: 1rem;
        }

        .logo.small img {
            width: 75px;
        }

        header .contact {
            padding: 1rem 2rem;
        }
    }

    @media only screen and (max-width: 650px) {
        header {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
        }

        .contact {
            order: 0;
        }

        :global(header nav) {
            order: 1;
        }
    }

    @media only screen and (max-width: 450px) {
        .contact img {
            display: none;
        }
    }
</style>