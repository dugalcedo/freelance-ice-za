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
        width: 100%;
        position: absolute;
        top: 100%;
        background-color: var(--accent);
        padding: 0;
        border-right: 10px solid var(--light);
    }

    .mobile-menu a {
        font-weight: bold;
        color: var(--light);
        text-decoration: none;
        display: block;
        text-align: right;
        padding: .5rem;
    }

    .mobile-menu a:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>