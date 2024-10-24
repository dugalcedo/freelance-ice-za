<script>
    import HeaderLite from './header/HeaderLite.svelte';
    export let style = `background-image: url("/images/samples/south-africa-city.jpg");`;
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
        background-position: center;
        background-size: cover;
    }
</style>