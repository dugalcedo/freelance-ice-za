<script>
    import Icon from "../reusable-components/Icon.svelte";
    import { closeModal } from "./modalStore.svelte.js";
</script>

<button class="square" on:click={closeModal}>
    <Icon name="close" width="30px" />
</button>

<style>
    button {
        border-radius: 50%;
        background-color: transparent;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
</style>