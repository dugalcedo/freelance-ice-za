<script>
    import Logo from '../Logo.svelte';
    import HeaderMenu from './HeaderMenu.svelte';
    import { openModal } from '../../modals/modalStore.svelte.js';

    let menuShown = false;

    const showMenu = () => {
        menuShown = true;
    }

    const handleContactClick = () => {
        if (window.innerWidth <= 1150) {
            console.log('test')
            openModal("contact")
        }
    }
</script>

<header class="tri-col">
    <!-- left -->
    <div class="logo-mobile mobile left">
        <img src="/images/logo.webp" alt="logo">
    </div>
    <div class="desktop left">
        <Logo style="padding: 0.5rem"/>
    </div>

    <!-- center -->
    <div class="contact-wrapper center">
        <div 
            class="contact"
            on:click={handleContactClick}
            on:keypress={handleContactClick}
            tabindex="-1"
            role="button"
        >
            <div class="phone">
                <img src="/images/icons/phone.svg" alt="phone icon">
                <p>031 0300 300</p>
            </div>
            <div class="email">
                <img src="/images/icons/email.svg" alt="email icon">
                <a href="mailto:admin@ic-express.co.za">
                    <p>admin@ic-express.co.za</p>
                </a>
            </div>
        </div>
    </div>

    <!-- right -->
    <div class="nav-wrapper right">
        <nav class="main-nav">
            <button class="burger" on:click={showMenu}>
                <img src="/images/icons/menu.svg" alt="Menu icon">
            </button>
        </nav>
    </div>
</header>

<HeaderMenu bind:shown={menuShown} />

<style>
    header {
        margin-bottom: 2rem;
    }

    header .left {
        padding: .5rem;
    }

    .desktop {
        display: none;
    } 

    .logo-mobile img {
        width: 50px;
    }

    .contact-wrapper {
        align-items: flex-start;
    }

    .contact {
        background-color: var(--accent2);
        color: var(--light);
        font-weight: bold;
        padding: .5rem;
        border-radius: 0 0 .5rem .5rem;

        display: flex;
        gap: 1rem;
        align-items: center;

        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    .contact a {
        color: var(--light);
    }

    .contact > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .nav-wrapper {
        align-items: flex-start;
    }

    .main-nav {
        background-color: var(--accent);
        border-radius: 0 0 0 1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    .burger {
        padding: .5rem;
        background: none;
        border-radius: 0 0 0 1rem;
    }

    .burger:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .burger img {
        width: 40px;
        display: block;
    }

    @media only screen and (max-width: 1150px) {
        .contact {
            cursor: pointer;
            transition: .5s;
        }

        .contact:hover {
            filter: brightness(1.2);
            padding: 1rem;
        }

        .phone p, .email a {
            display: none;
        }
    }
</style>