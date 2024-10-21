<script>
    export let item
</script>

<li class="submenu-item">
    <a href="{item.href||"#"}">
        {item.text}
    </a>
</li>

<style>
    .submenu-item > a {
        display: block;
        padding: 0.5rem;
        color: var(--slate);
        font-size: 0.8rem;
        text-decoration: none;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
</style>