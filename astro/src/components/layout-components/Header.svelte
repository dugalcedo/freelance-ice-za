<script>
    import HeaderNav from './HeaderNav.svelte'
</script>

<div id="header-wrapper">
    <header class="container">
        <div class="logo">
            <img src="/images/logo.png" alt="Logo which reads 'ICE XPRESS, INTERNATIONAL COURIER EXPRESS'">
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

    <div class="accent-bg"></div>
</div>


<style>
    #header-wrapper {
        position: relative;
        background-color: var(--slate);
    }

    #header-wrapper .accent-bg {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        height: 100%;
        width: 50%;
        background-color: var(--accent);
        border-top: 15px solid var(--gray);
    }

    header {
        display: flex;
    }

    :global(header > *) {
        position: relative;
        z-index: 2;
    }

    header .logo {
        padding: 1rem 4rem;
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
        border-top: 15px solid var(--gray);
        gap: 1rem;
        color: white;
    }

    header .contact-us {
        font-weight: bold;
        text-transform: uppercase;
    }

</style>