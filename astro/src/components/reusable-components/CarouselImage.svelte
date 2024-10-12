<script>
    // src: image src for background
    export let src;
</script>

<div class="carousel-image" style="background-image: url('{src}');">
    <slot />
</div>

<style>
    .carousel-image {
        background-position: center;
    }
</style>