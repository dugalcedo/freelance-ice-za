<script>
    export let name;
    export let menu;
    export let heading;
</script>

<nav class="nav {name}-nav">
    <h4>{heading}</h4>
    <ul class="items">
        {#each menu as { text, href }}
            <li>
                <a href="{href}">{text}</a>
            </li> 
        {/each}
    </ul>
</nav>

<style>
    nav {
        width: 100%;
    }

    h4 {
        text-transform: uppercase;
    }

    nav ul {
        padding-left: 0.5rem;
    }

    nav a {
        color: white;
        text-decoration: none;
        opacity: 0.8;
    }

    nav a:hover {
        text-decoration: underline;
        opacity: 1;
    }
</style>