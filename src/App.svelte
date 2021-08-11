<script>
	let button = { status: false };
	import Overview from "./components/overview.svelte";
	export let name;

	const nd = {
		number: "44",
		description: "the value is",
	};

	function toggle() {
		button.status = !button.status;
	}
</script>

<main>
	<div class="container mx-auto flex flex-col justify-center gap-y-4">
		<h1 class="text-red-500 text-6xl">Hello {name}!</h1>
		<Overview {...nd} />

		<div>
			{#if button.status}
				<button
					class="bg-blue-500 text-white px-6 py-2"
					on:click={toggle}
				>
					activate
				</button>
			{:else}
				<button
					class="bg-red-500 text-white px-6 py-2"
					on:click={toggle}
				>
					de-activate
				</button>
			{/if}
		</div>
	</div>
</main>
