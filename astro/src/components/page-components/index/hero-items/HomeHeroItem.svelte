<script>
    import CarouselImage from '../../../reusable-components/CarouselImage.svelte'

    export let heading;
    export let text;
    export let image;
</script>

<CarouselImage src="{image}">
    <div>
        <div class="home-hero-item">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
</CarouselImage>

<style>
    .home-hero-item{
        max-width: 500px;
        position: absolute;
        bottom: 25%;
        right: 8rem;
        text-align: right;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        background-color: rgba(0, 0, 0, 0.6);
        color: var(--light);
        backdrop-filter: blur(5px);
        padding: 2rem;
        border-radius: 2rem;
    }

    :global(.home-hero-item *) {
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    }

    @media only screen and (max-width: 750px) {
        .home-hero-item {
            max-width: unset;
            width: 100vw;
            top: 0;
            left: 0;
            border-radius: 0;
            height: 100%;
            background-color: transparent;
            background-image: linear-gradient(rgba(0,0,0,0.7), transparent);
            text-align: center;
        }
    }
</style>