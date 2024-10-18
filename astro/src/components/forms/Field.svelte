<script>
    export let label = "";
    export let labelId = "";
</script>

<div class="field">
    {#if label && labelId}
        <label for="{labelId}">{label}</label>
    {/if}
    <slot />
</div>