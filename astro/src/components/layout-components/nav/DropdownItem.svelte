<script>
    import { clickOutside } from '../../../assets/util/index.js'
    import SubmenuItem from './SubmenuItem.svelte'
    import { slide } from 'svelte/transition'

    export let item;

    let submenuShown = false;
</script>

<li class="dropdown-item"
    use:clickOutside={() => submenuShown = false}
>
    {#if item.href}
    <!-- Link -->
        <a href="{item.href}">
            {item.text}
        </a>

    {:else}
    <!-- Menu -->
        <button
            class:submenu-shown={submenuShown}
            on:click={() => submenuShown = !submenuShown}
        >
            {item.text}
            <img src="/images/icons/tri-right.svg" alt="triangle right">
        </button>
        {#if submenuShown}
            <ul class="dropdown-item_submenu" in:slide={{ axis: "x" }}>
                {#each item.menu as _item}
                    <SubmenuItem item={_item} />
                {/each}
            </ul>
        {/if}

    {/if}
</li>

<style>
    .dropdown-item {
        position: relative;
    }

    .dropdown-item > a, .dropdown-item > button {
        display: block;
        width: 100%;
        padding: 0.75rem;
        text-align: left;
        color: var(--slate);
        text-decoration: none;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }

        &:focus {
            outline: 0;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    .dropdown-item > button {
        display: flex;
        align-items: center;

        & > img {
            filter: invert(1);
        }
    }

    .dropdown-item_submenu {
        position: absolute;
        top: 0;
        left: 100%;
        border-right: 8px solid var(--slate);
        border-bottom: 4px solid var(--accent2);

        background-color: var(--light);
        color: var(--slate);
        padding: 0;
    }
</style>