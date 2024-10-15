<script>
    import { onMount } from 'svelte'

    const services = [
        {
            id: "express-domestic",
            heading: "Express Domestic",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        },
        {
            id: "economy-road",
            heading: "Economy RoadFreight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        },
        {
            id: "cross-border-road",
            heading: "CrossBorder RoadFreight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        },
        {
            id: "intl-air",
            heading: "International AirFreight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        },
        {
            id: "intl-courier",
            heading: "International Courier",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        },
        {
            id: "fragile",
            heading: "Valuable and Fragile Deliveries",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        },
        {
            id: "dedicated-driveaway",
            heading: "Dedicated Drive-Away Deliveries",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        },
		{
            id: "fcl-lcl",
            heading: "FCL's / LCL's",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid quam necessitatibus, voluptates eum quo ullam, vitae amet ipsum doloribus adipisci rerum eligendi nesciunt architecto, repellendus odit incidunt impedit. Molestiae, ratione assumenda! Tenetur sunt asperiores itaque hic repellendus! Tempore amet porro aliquam non nam nostrum reiciendis iusto laborum dolores numquam animi possimus quibusdam odio sunt cum, laboriosam voluptate blanditiis ea debitis officia corporis doloremque. Cupiditate aliquam incidunt ex, ducimus vitae qui id hic similique non consectetur aut obcaecati rem? Doloribus atque dolorem ducimus magnam aspernatur iusto obcaecati, eligendi quidem voluptatibus necessitatibus aut sequi tempore? Eligendi quisquam aliquam nulla minus temporibus."
        }
    ]

    const themes = [
        {bg: 'light', color: 'slate'},
        {bg: 'slate', color: 'light'},
        {bg: 'accent2', color: 'slate'},
        {bg: 'gray', color: 'light'},
        {bg: 'accent', color: 'slate'}
    ]

    let themeI = -1;
    function getTheme() {
        themeI++;
        if (themeI >= themes.length) themeI = 0;
        return themes[themeI];
    }
</script>

<div id="services">
    {#each services as {id, heading, description}}
    {@const {bg, color} = getTheme()}
        <section 
            class="service container-outer" 
            id={id}
            style="
                background-color: var(--{bg});
                color: var(--{color});
            "
        >
            <article class="container-inner">
                <h3>{heading}</h3>
                <p>{description}</p>
            </article>
        </section>
    {/each}
</div>

<style>
    :global(html) {
        scroll-behavior: smooth !important;
    }

    .service {
        min-height: 100vh;
    }

    .container-outer {
        display: flex;
        align-items: center;
        justify-content: center;

        & h3 {
            font-size: 4rem;
        }
    }
</style>