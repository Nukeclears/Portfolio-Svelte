<script>
    import App from '../App.svelte';
    import image1 from '../images/Hiding.png'
    import image2 from '../images/Hiding.png'
    import Blocks from './block.svelte';
    export let title = 'placeholdertitle';

    let block1 = {
        blocktitle: "title1",
        blockdescription: 'description1',
        src: image1,
    };

    let block2 = {
        blocktitle: "title2",
        blockdescription: 'description2',
        src: image2,
    };
</script>

<p class="text-6xl text-blue-500">{title}</p>
<Blocks {...block1}/>
<Blocks {...block2}/>