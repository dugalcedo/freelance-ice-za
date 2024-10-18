<script>
    export let style = "";
    export let variant = false;
</script>

<div class="logo" style="{style}">
    <img src="/images/logo.png" alt="Logo which reads: ICExpress | International Courier Express">
    {#if variant}
        <div class="bg"></div>
        <div class="subtitle">
            <span>INTERNATIONAL COURIER EXPRESS</span>
        </div>
    {/if}
</div>

<style>
    .logo {
        position: relative;
    }

    .logo img {
        position: relative;
        z-index: 2;
    }

    .bg, .subtitle {
        position: absolute;
        top: 58%;
        right: -2%;
        width: 80%;
        background-color: var(--slate);
        height: 16%;
    }

    .bg {
        z-index: 1;
    }

    .subtitle {
        z-index: 3;
        width: 70%;
        color: var(--accent);
        font-weight: bold;
        image-rendering: pixelated;
        font-size: .6rem;
    }

    .subtitle span {
        position: relative;
        top: 1px;
        left: 2px;
    }
</style>