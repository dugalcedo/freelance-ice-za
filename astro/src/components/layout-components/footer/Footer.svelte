<script>
    import { mainNav, servicesNav, toolsNav, socialsNav } from "./footerNavs.js";
    import FooterNav from "./FooterNav.svelte";

</script>

<section class="container-outer">
    <footer class="container-inner">
            <div class="logo-socials">
                <div class="logo">
                    <img src="/images/logo.webp" alt="ICExpress logo">
                </div>
                <nav class="socials">
                    {#each socialsNav as {icon, href}}
                        <div class="social">
                            <a href="{href || '#'}" target="_blank">
                                <img src="/images/icons/{icon}.svg" alt="{icon} icon">
                            </a>
                        </div>
                    {/each}
                </nav>
            </div>
            <div class="navs">
                <FooterNav
                    name="main"
                    heading="Site Navigation"
                    menu={mainNav}
                />
                <FooterNav
                    name="services"
                    heading="Services"
                    menu={servicesNav}
                />
                <FooterNav
                    name="tools"
                    heading="Tools"
                    menu={toolsNav}
                />
            </div>
    </footer>
</section>

<style>
    .container-outer {
        background-image: linear-gradient(var(--dark-gray), var(--slate));
    }

    footer {
        color: white;
        padding: 0.5rem;
        gap: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        width: 600px;
        margin: auto;
        max-width: 100%;
    }

    .logo-socials {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .socials {
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .logo img {
        width: 100px;
    }

    .social img {
        width: 50px;
        filter: invert(1) brightness(0.5);
        transition: .5s;
    }

    .socials > .social:nth-child(4) img {
        transform: scale(1.1);
    }

    .socials > .social:nth-child(5) img {
        transform: scale(1.18);
        position: relative;
        top: -1px;
    }

    .social a:hover img {
        filter: invert(1) brightness(1);
    }

    .navs {
        display: grid;
        gap: 1rem;
    }

    @media only screen and (min-width: 950px) {
        .container-outer {
            padding: 2rem;
        }

        .navs {
            grid-template-columns: 1fr 1fr;
        }

        :global(.services-nav) {
            grid-row: span 2;
        }
    }

    @media only screen and (min-width: 1300px) {
        .navs {
            grid-template-columns: 1fr 1fr 1fr;
        }

        footer {
            width: 100%;
        }

        .logo-socials {
            flex-direction: row;
        }
    }
</style>