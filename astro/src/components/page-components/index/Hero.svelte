<script>
    import Carousel from '../../reusable-components/Carousel.svelte'

    // Hero Items
    import HeroItem1 from "./hero-items/HeroItem1.svelte";
    import HeroItem2 from "./hero-items/HeroItem2.svelte";
    import HeroItem3 from "./hero-items/HeroItem3.svelte";

    //
    const heroItems = [
        HeroItem1,
        HeroItem2,
        HeroItem3
    ]
</script>

<Carousel>
    {#each heroItems as item}
        <svelte:component this={item} />
    {/each}
</Carousel>