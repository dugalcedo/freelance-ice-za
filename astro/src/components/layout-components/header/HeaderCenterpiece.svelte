<script>
    import Icon from "../../reusable-components/Icon.svelte";
</script>

<div id="header-centerpiece">
    <div class="phone">
        <Icon name="phone" width="30px" />
        <p>031 0300 300</p>
    </div>
    <nav class="buttons desktop">
        <ul>
            <li>
                <a href="/portal">Business Portal</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
        </ul>
    </nav>
</div>

<style>
    #header-centerpiece {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }

    .phone {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-weight: bold;
    }

    .buttons ul {
        padding: 0;
        display: flex;
        gap: .5rem;
    }

    .buttons a {
        display: inline-block;
        border: 1px solid white;
        color: white;
        font-weight: bold;
        text-decoration: none;
        padding: .5rem 1rem;
        border-radius: 100px;
    }

    .buttons a:hover {
        background-color: white;
        color: var(--accent);
    }

    @media only screen and (min-width: 800px) {
        #header-centerpiece {
            top: 0;
            right: 0;
            left: unset;
            translate: -85px 20px;
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }
</style>