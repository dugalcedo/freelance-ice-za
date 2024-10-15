<script>
    import NavItem from './nav/NavItem.svelte'

    const navItems = [
        {
            text: "Home",
            href: "/"
        },
        {
            text: "About us",
            href: "/about"
        },
        {
            text: "Tracking",
            href: "/tracking"
        },
        {
            text: "Support",
            href: "/support"
        },
        {
            text: "Contact",
            href: "/contact"
        },
        {
            text: "More",
            menu: [
                {
                    text: "Services",
                    menu: [
                        {
                            text: "Express Domestic Deliveries",
                            href: "/services#express-domestic"
                        },
                        {
                            text: "Economy RoadFreight",
                            href: "/services#economy-road"
                        },
                        {
                            text: "CrossBorder RoadFreight",
                            href: "/services#cross-border-road"
                        },
                        {
                            text: "International AirFreight",
                            href: "/services#intl-air"
                        },
                        {
                            text: "International Courier",
                            href: "/services#intl-courier"
                        },
                        {
                            text: "Valuable and Fragile Deliveries",
                            href: "/services#fragile"
                        },
                        {
                            text: "Dedicated Drive-Away Deliveries",
                            href: "/services#dedicated-driveaway"
                        },
                        {
                            text: "FCL's / LCL's",
                            href: "/services#fcl-lcl"
                        }
                    ]
                },
                {
                    text: "Shipping Tools",
                    menu: [
                        {
                            text: "Packaging Guidelines",
                            href: "/tools/packaging"
                        },
                        {
                            text: "Customs Documents",
                            href: "/tools/customs"
                        },
                        {
                            text: "Dangerous Goods / Lithium Batteries",
                            href: "/tools/dangerous"
                        },
                        {
                            text: "Track a Shipment",
                            href: "/tracking"
                        },
                        {
                            text: "Book a Shipment",
                            href: "/tools/book"
                        }
                    ]
                },
                {
                    text: "FAQ",
                    href: "/faq"
                }
            ]
        }
    ]

    // array of indices
    let shownMenus = [];

</script>


<nav>
    <ul>
        {#each navItems as item}
            <NavItem {item} />
        {/each}
    </ul>
</nav>


<style>
    nav {
        background-color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 15px solid var(--gray);
    }

    nav > ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
</style>