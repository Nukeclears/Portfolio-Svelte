<script>
    export let blocktitle;
    export let blockdescription;
    export let src;
</script>

<div>
    <h1>{blocktitle}</h1>
    <p>{blockdescription}</p>
    <img {src} alt="blockimage" height="300" width="200">
</div>