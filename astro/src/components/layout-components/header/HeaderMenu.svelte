<script>
    import { slide, fade } from "svelte/transition";
    import Icon from "../../reusable-components/Icon.svelte";
    import headerMenu from "./headerMenu.js";


    export let shown = false;

    const hide = () => {
        shown = false;
    }


</script>

{#if shown}
    <div 
        id="header-menu-backdrop" 
        transition:fade 
        on:click|self={hide}
        on:keypress|self={hide}
        tabindex="-1"
        role="button"
    >
        <nav id="header-menu" transition:slide>
            <img src="/images/logo.webp" alt="ICE Logo" class="logo">
            <button class="close square" on:click={hide}>
                <Icon name="close" />
            </button>
            <ul class="nav-items">
                {#each headerMenu as {text, href, fn}}
                    <li>
                        {#if href}
                            <a href="{href}">
                                {text}
                            </a>
                        {:else if fn}
                            <button on:click={fn}>
                                {text}
                            </button>
                        {/if}
                        <div class="bg"></div>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
{/if}

<style>
    #header-menu-backdrop {
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100dvh;

        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
    }

    #header-menu {
        background-color: var(--accent);
        color: var(--light);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        position: fixed;
        top: 0px;
        right: 0px;

        width: 100%;
    }

    #header-menu .logo {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 50px;
    }

    .close {
        background: none;
    }

    .close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .nav-items {
        padding: 0;
        text-align: right;
        margin: 2rem 0;
    }

    .nav-items li {
        position: relative;
    }

    .nav-items .bg {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--accent2);
        height: 100%;
        width: 0%;
        transition: .125s;
    }

    .nav-items button:hover + .bg,
    .nav-items a:hover + .bg,
    .nav-items button:focus + .bg,
    .nav-items a:focus + .bg {
        width: 100%;
    }

    .nav-items button {
        padding: 0;
        background: none;
    }

    .nav-items a, .nav-items button {
        position: relative;
        z-index: 10002;
        color: var(--light);
        text-decoration: none;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: bold;
        display: inline-block;
        border-right: 5px solid var(--accent2);
        padding: .5rem 1rem;
    }

    @media only screen and (min-width: 650px) {
        #header-menu {
            width: unset;
            min-width: 250px;
            border-radius: 0 0 0 1rem;
        }
    }

</style>