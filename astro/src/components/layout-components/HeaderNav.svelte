<script>
    const navItems = [
        {
            text: "Home",
            href: "/"
        },
        {
            text: "About us",
            href: "#"
        },
        {
            text: "Tracking",
            href: "#"
        },
        {
            text: "Support",
            href: "#"
        },
        {
            text: "Contact",
            href: "#"
        },
        {
            text: "More",
            href: "#",
            dropdown: true
        }
    ]
</script>


<nav>
    <ul>
        {#each navItems as item}
            <li class="nav-item">
                <a href="{item.href||"#"}">
                    {item.text}
                    {#if item.dropdown}
                        <img 
                            src="/images/icons/tri-down.svg" 
                            alt="downward triangle" 
                        />
                    {/if}
                </a>
            </li>
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

    nav ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    nav ul a {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem .5rem .25rem .5rem;
        text-transform: uppercase;
        background-image: linear-gradient(var(--slate), var(--slate));
        color: var(--light);
        font-weight: bold;
        text-decoration: none;

        transition: 125ms;
    }

    nav ul a:hover {
        transform: scale(1.1);
        background-image: linear-gradient(var(--slate), #555555);
    }

    .nav-item a {
        display: flex;
        align-items: center;
        gap: 1ch;
    }
</style>