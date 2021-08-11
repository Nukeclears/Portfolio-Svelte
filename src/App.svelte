<script>
    let button = { status: false }
    import Overview from './components/overview.svelte'
    import Header from './components/header.svelte'
    import Footer from './components/footer.svelte'

    // function toggle() {
    // 	button.status = !button.status;
    // }
</script>

<main>
    <div class="flex flex-col gap-16 lg:gap-36 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Header title="Thomas" subtitle="van Deursen" tag1="test1" tag2="test2" tag3="test3" />
        <Overview />
        <Footer logoname="Thomas" mail="mail@mail.com" />
    </div>
    <!-- {#if button.status}
        <button class="bg-blue-500 text-white px-6 py-2" on:click={toggle}> activate </button>
    {:else}
        <button class="bg-red-500 text-white px-6 py-2" on:click={toggle}> de-activate </button>
    {/if} -->
</main>
