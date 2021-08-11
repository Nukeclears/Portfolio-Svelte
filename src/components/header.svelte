<script>
  export let title;
  export let subtitle;
  export let tag1;
  export let tag2;
  export let tag3;
</script>

<div
    class="bg-200% bg-right bg-gradient-to-r from-gray-100 dark:from-gray-1000 dark:via-red-500 to-cyan-400 dark:to-pink-500 animate-gradient-x"
>
    <div class="container mx-auto h-full font-display px-3 lg:px-0 pt-8 lg:pt-12 pb-4">
        <div class="flex flex-col h-full justify-between gap-24 lg:gap-48">
            <div class="flex justify-end">
                <button
                    class="py-3 px-4 rounded-lg bg-gray-1000 dark:bg-white transition-colors duration-500"
                    id="darktoggle"
                    aria-label="toggle dark-mode"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-white dark:text-black block dark:hidden transition-colors duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-white dark:text-black hidden dark:block transition-colors duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </button>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
                <div class="flex flex-col self-center animate-dropin w-72 lg:w-auto">
                    <div class="h-0.5 lg:h-1 bg-red-500 dark:bg-cyan-400 mb-3 transition-colors duration-500 w-full" />
                    <div class="text-black dark:text-white uppercase">
                        <h1 class="transition-colors duration-500 text-6xl lg:text-8xl font-black">{title}</h1>
                        <h2 class="transition-colors duration-500 text-3xl lg:text-5xl font-thin">{subtitle}</h2>
                    </div>
                </div>
                <div class="flex flex-col self-center w-72 lg:w-full">
                    <div class="h-1" />
                    <p
                        class="bg-clip-text text-xl lg:text-4xl text-left lg:text-right uppercase font-display text-transparent font-bold bg-gradient-to-l from-red-500 dark:from-cyan-300 via-red-800 dark:via-cyan-50 to-red-600 dark:to-cyan-300 animate-gradient-x bg-200% bg-right"
                    >
                        {tag1}
                    </p>
                    <p
                        class="bg-clip-text text-xl lg:text-4xl text-left lg:text-right uppercase font-display text-transparent font-bold bg-gradient-to-l from-red-500 dark:from-cyan-300 via-red-800 dark:via-cyan-50 to-red-600 dark:to-cyan-300 animate-gradient-x bg-200% bg-right"
                    >
                        {tag2}
                    </p>
                    <p
                        class="bg-clip-text text-xl lg:text-4xl text-left lg:text-right uppercase font-display text-transparent font-bold bg-gradient-to-l from-red-500 dark:from-cyan-300 via-red-800 dark:via-cyan-50 to-red-600 dark:to-cyan-300 animate-gradient-x bg-200% bg-right"
                    >
                        {tag3}
                    </p>
                </div>
            </div>
            <div class="flex justify-center pb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 dark:text-white text-black animate-ping"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    </div>
</div>
