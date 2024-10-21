<script>
    export let width = "100%";
    export let name = "";
    export let display = "block";
    export let invert = false;
    let extension = "svg";
    if (name.endsWith(".png")) {
         extension = "png";
         name = name.replace('.png', '');
    }
</script>

<img src="/images/icons/{name}.{extension}" alt="{name} icon" style="width: {width}; display: {display}; filter: invert({invert ? 1 : 0});">