<script>
    import { navItems, tabletNavItems } from './navMenus.js'
    import NavItem from './nav/NavItem.svelte'
    import HeaderMobileNav from './HeaderMobileNav.svelte'

    let w = 0;
    let menu = navItems;
    $: if (w) {
        if (w >= 1100) {
            menu = navItems;
        } else {
            menu = tabletNavItems;
        }
    }
</script>

<svelte:window bind:innerWidth={w} />


<nav class="large">
    <ul>
        {#each menu as item}
            <NavItem {item} />
        {/each}
    </ul>
</nav>

<nav class="xsmall">
    <HeaderMobileNav />
</nav>

<style>
    nav {
        background-color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 15px solid var(--gray);
    }

    nav.xsmall {
        display: none;
    }

    nav > ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    @media only screen and (max-width: 1360px) {
        nav {
            padding: 1rem 0rem;
        }

        nav > ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.5rem;
        }

        :global(nav > ul > li > a, nav > ul > li > button) {
            width: 100%;
        }
    }

    @media only screen and (max-width: 1100px) {
        nav > ul {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media only screen and (max-width: 650px) {
        nav.large {
            display: none;
        }

        nav.xsmall {
            display: flex;
        }
    }
</style>