<script>
    import { openModal } from "../modals/modalStore.svelte.js";

    const socials = [
        {
            icon: "facebook",
            href: "http://www.facebook.com/www.icexpress.co.za"
        },
        {
            icon: "whatsapp",
            href: "https://api.whatsapp.com/send?phone=27310300300&text=Hello%20I%20would%20like%20to%20chat"
        },
        {
            icon: "instagram",
            href: "https://www.instagram.com/icexpress.za/?hl=en"
        },
        {
            icon: "x-social",
            href: "https://twitter.com/ic_express"
        },
        {
            icon: "linkedin",
            href: "http://www.linkedin.com/company/icexpress?trk=top_nav_home"
        }
    ]

    const nav = [
        {
            text: "&copy; All rights reserved ICExpress 2012-2024"
        },
        {
            text: "Terms & Conditions",
            onClick: () => {
                openModal("termsAndConditions")
            }
        },
        {
            text: "Tracking",
            href: "/tracking"
        },
        {
            text: "FAQs",
            href: "/faqs"
        },
        {
            text: "Contact us",
            href: "/contact"
        },
        {
            text: "Support",
            href: "/support"
        }
    ]
</script>

<footer>
        <div class="logo">
            <img src="/images/logo.webp" alt="ICExpress logo">
        </div>
        <nav class="nav">
            {#each nav as item}
                {#if item.href}
                    <a href="{item.href}">
                        {@html item.text}
                    </a>
                {:else if item.onClick}
                    <button on:click={item.onClick}>
                        {@html item.text}
                    </button>
                {:else}
                    <p>{@html item.text}</p>
                {/if}
            {/each}
        </nav>
        <nav class="socials">
            {#each socials as {icon, href}}
                <div class="social">
                    <a href="{href || '#'}" target="_blank">
                        <img src="/images/icons/{icon}.svg" alt="{icon} icon">
                    </a>
                </div>
            {/each}
        </nav>
</footer>

<style>
    footer {
        background-image: linear-gradient(var(--dark-gray), var(--slate));
        color: white;
        padding: 3rem;
        display: grid;
        grid-template-columns: 1fr 6fr 3fr;
        align-items: center;
        gap: 2rem;
    }

    .nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav > * {
        display: block;
        padding: .25rem 1rem;
    }

    .nav > button {
        background-color: transparent;
        color: white;
        font-size: 1rem;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

    .nav > a {
        color: white;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .socials {
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: flex-end;
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

    @media only screen and (max-width: 899px) {
        footer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media only screen and (max-width: 450px) {
        footer {
            padding: 1rem;
        }

        .social img {
            width: 35px;
        }
    }
</style>