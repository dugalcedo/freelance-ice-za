<script>
    import Logo from '../Logo.svelte';
    import HeaderMenu from './HeaderMenu.svelte';
    import HeaderCenterpiece from './HeaderCenterpiece.svelte';
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

<header>
    <!-- left -->
    <a href="/" class="logo-mobile mobile left">
        <img src="/images/logo.webp" alt="logo">
    </a>
    <a href="/" class="desktop left">
        <Logo style="padding: 0.5rem"/>
    </a>

    <HeaderCenterpiece />

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
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
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


    .nav-wrapper {
        align-items: flex-start;
    }

    .right {
        padding: .5rem;
    }

    .main-nav {
        background-color: var(--accent);
        border-radius: 1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    .burger {
        padding: .5rem;
        background: none;
        border-radius: 1rem;
    }

    .burger:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .burger img {
        width: 40px;
        display: block;
    }

    
</style>