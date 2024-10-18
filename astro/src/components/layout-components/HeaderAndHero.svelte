<script>
    import HeaderLite from './header/HeaderLite.svelte';
    export let style = `background-image: url("/images/freight-train.jpg");`;
</script>

<section 
    id="header-and-hero"
    style="
        {style}
    "
>
    <HeaderLite />
    <slot />
</section>

<style>
    #header-and-hero {
        padding-bottom: 2rem;
    }
</style>