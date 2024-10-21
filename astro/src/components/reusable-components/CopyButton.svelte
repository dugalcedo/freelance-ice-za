<script>
    import Icon from "./Icon.svelte";
    export let text = "Copy";
</script>

<button on:click={(e) => {
    const btn = e.target;
    const orig = btn.innerHTML;
    window.navigator.clipboard.writeText(text);
    btn.innerHTML = "COPIED";
    setTimeout(() => {
        btn.innerHTML = orig;
    }, 1000);
}}>
    <Icon name="copy" width="15px" invert={true} />
    <slot />
</button>

<style>
    button {
        display: flex;
        align-items: center;
        gap: .5rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

</style>