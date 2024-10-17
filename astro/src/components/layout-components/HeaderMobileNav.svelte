<script>
    import { clickOutside } from "../../assets/util";
    import { mobileNavItems } from "./navMenus";
    import { slide } from "svelte/transition";

    let menuShown = false;
</script>

<nav class="mobile-menu-container" use:clickOutside={() => menuShown = false}>
    <button class="menu-btn" on:click={() => menuShown = !menuShown}>
        <img class="hamburger" src="/images/icons/menu.svg" alt="menu icon">
    </button>
    {#if menuShown}
        <ul class="mobile-menu" transition:slide>
            {#each mobileNavItems as item}
                <li>
                    <a href="{item.href}">
                        {item.text}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</nav>

<style>
    .mobile-menu-container {
        position: relative;
    }

    .menu-btn {
        background-color: transparent;
    }

    .hamburger {
        width: 50px;
    }

    .mobile-menu {
        position: absolute;
        top: 100%;
        right: 1rem;
        background-color: var(--light);
        padding: 0;
        border-right: 10px solid var(--slate);
    }

    .mobile-menu a {
        font-weight: bold;
        color: var(--slate);
        text-decoration: none;
        display: block;
        text-align: right;
        padding: .5rem;
    }

    .mobile-menu a:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>