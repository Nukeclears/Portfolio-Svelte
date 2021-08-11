<script>
    export let blocktitle;
    export let blockdescription;
    export let src;
</script>

<a class="flex flex-col justify-between h-96 border-2 rounded-xl transform hover:scale-105 transition-transform group border-red-500 dark:border-cyan-500" href="/">
    <div class="overflow-hidden rounded-t-xl bg-red-500 dark:bg-cyan-500">
        <div class="opacity-90 lg:opacity-80 transition-opacity duration-200 object-cover h-full w-full group-hover:opacity-100">
            <img {src} alt="block">
        </div>
    </div>
    <div class="flex flex-col gap-4 rounded-b-xl px-8 lg:px-12 py-6 lg:py-8 bg-gray-100 dark:bg-gray-800">
        <p class="select-all text-lg lg:text-xl font-display font-bold uppercase text-red-500 dark:text-cyan-500">
            {blocktitle}
        </p>
        <p class="select-all text-base lg:text-lg font-body dark:text-white text-black">
            {blockdescription}
        </p>
    </div>
</a>