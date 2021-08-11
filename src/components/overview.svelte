<script>
    import image from '../images/Block_image.png';
    import Blocks from './block.svelte';
    export let title = 'placholder';

    let block1 = {
        blocktitle: "title1",
        blockdescription: 'description1',
        src: image,
    };

    let block2 = {
        blocktitle: "title2",
        blockdescription: 'description2',
        src: image,
    };

    let block3 = {
        blocktitle: "title3",
        blockdescription: 'description3',
        src: image,
    };
</script>

<div>
    <div class="px-7 lg:px-14">
        <div class="flex flex-col gap-8 lg:gap-24">
            <div class="container self-center">
                <h2 class="bg-clip-text text-4xl lg:text-6xl inline-block uppercase font-display text-transparent font-bold bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500 animate-gradient-x bg-200% bg-right">{title}</h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-12 lg:gap-24">
                <Blocks {...block1}/>
                <Blocks {...block2}/>
                <Blocks {...block3}/>
            </div>
        </div>
    </div>
</div>