<script>
    import DropdownItem from './DropdownItem.svelte';
    import {clickOutside} from '../../../assets/util/index.js';
    import {slide} from 'svelte/transition'

    export let item;

    let menuShown = false;
</script>

<li 
    class="nav-item"
    use:clickOutside={() => menuShown = false}
>
    {#if item.href}
    <!-- Link -->
        <a href="{item.href}">
            {item.text}
        </a>

    {:else}
    <!-- Menu -->
        <button
            on:click={() => menuShown = !menuShown}
            class:menu-shown={menuShown}
        >
            {item.text}
            <img src="/images/icons/tri-down.svg" alt="">
        </button>

        {#if menuShown}
            <ul class="nav-item_dropdown" transition:slide>
                {#each item.menu as _item}
                    <DropdownItem item={_item} />
                {/each}
            </ul>
        {/if}
    {/if}
</li>

<style>
    .nav-item {
        position: relative;
    }

    .nav-item > a, .nav-item > button {
        display: block;
        background-color: var(--slate);
        padding: .75rem;
        font-size: 1rem;
        color: var(--light);
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;

        &:hover {
            outline: 4px solid var(--accent2);
        }

        &:focus {
            outline: none;
        }

        &:not(.menu-shown) {
            border-radius: 0.25rem 0.5rem 0.25rem 0.5rem;
        }
    }

    .nav-item > button {
        display: flex;
        align-items: center;
    }

    .menu-shown {
        border-radius: .25rem .5rem 0 0;
    }

    .nav-item_dropdown {
        background-color: var(--light);
        padding: 0;
        position: absolute;
        border-left: 8px solid var(--slate);
        border-bottom: 4px solid var(--accent2);
        z-index: 100;
    }
</style>