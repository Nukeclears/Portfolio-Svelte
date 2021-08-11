<script>
    export let logoname;
    export let mail;
</script>

<div>
    <div class="bg-gradient-to-r from-cyan-200 dark:from-red-500 to-cyan-400 dark:to-pink-400 bg-opacity-70">
        <div class="px-7 lg:px14 bg-gray-1000 bg-opacity-10">
            <div class="flex flex-col">
                <div class="container self-center py-3">
                    <div class="flex justify-between">
                        <div class="flex flex-col text-black dark:text-white">
                            <div class="h-0.5 lg:h-1 bg-red-500 dark:bg-cyan-400 mb-3 transition-colors duration-500 w-full"></div>
                            <p
                                class="text-xl lg:text-xl font-display font-black uppercase leading-none lg:-mb-1 -mt-1 lg:-mt-3">
                                {logoname}
                            </p>
                        </div>
                        <div class="flex flex-col text-right text-black dark:text-white">
                            <a href="mailto:{mail}" class="text-sm lg:text-base font-display font-semibold">
                                {mail}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>