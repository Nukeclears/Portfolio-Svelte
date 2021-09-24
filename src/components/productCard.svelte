<script>
    import { variantIndex } from '../stores/stores';

    export let brand;
    export let product;
    export let productType;
    export let variants;
    let internalIndex = 0;

    $: stock = variants[internalIndex].variantQuantity;

    const updateVariant = (i) => {
        internalIndex = i
    };

    const updateVariantStore = () => {
        $variantIndex = internalIndex
	}
</script>

<div class="card lg:card-side bordered">
    <figure class="overflow-hidden">
        <div class="h-full bg-white">
            <img src={variants[internalIndex].variantImage} height="300" width="300" alt="product" class="w-full lg:w-80 h-96 lg:h-full object-contain" />
        </div>
    </figure>
    <div class="card-body">
        <div class="card-title mb-5">
            <h2 class="text-4xl">{product}</h2>
            <h3 class="text-md text-accent">{brand}</h3>
        </div>

        <div class="flex gap-x-4 mb-7">
            {#each productType as item}
                <div class="badge badge-outline">{item}</div>
            {/each}
        </div>
        <div class="flex flex-col h-full">
            <div class="flex flex-col gap-y-6 flex-1">
                <div class="flex gap-x-4 mb-5">
                    {#each variants as variant, i}
                    <div>
                        <button on:click="{() => updateVariant(i)}" on:click="{updateVariantStore}" class="h-6 w-6 rounded-full border-2 border-accent" style="background-color: {variant.variantColor};"/>
                    </div>
                    {/each}
                </div>
            </div>
            <p v-if="onSale" class="alert alert-success">On sale!</p>
            <div v-else class="h-[56px]" />
            <div class="card-actions flex-col">
                <div>
                    <p class="badge" 
                    class:badge-success={stock >= 10}
                    class:badge-warning={stock < 10}
                    class:badge-error={stock <= 0}
                    >{stock} in stock</p>
                </div>

                <button on:click="{() => updateVariantStore()}" on:click disabled={stock <= 0} class="btn btn-primary"> Add to Cart </button>
            </div>
        </div>
    </div>
</div>
