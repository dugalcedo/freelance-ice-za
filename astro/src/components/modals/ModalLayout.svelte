<script>
    export let heading = "Attention";
    import CloseButton from "./CloseButton.svelte";
</script>

<div class="modal-window">
    <div class="head">
        <h2>{heading}</h2>
        <CloseButton />
    </div>
    <div class="body">
        <slot />
    </div>
</div>

