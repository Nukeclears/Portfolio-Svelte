<script lang="ts">
    //store
    import { variantIndex } from '../stores/stores'
    
    //types
    import { productItemTYPE } from '../types/productTPE';

    export let product: productItemTYPE

    let internalIndex = 0
  
    $: stock = product.variants[internalIndex].variantQuantity

    $: updateVariantStore = () => {
        variantIndex.set(internalIndex)
    }
</script>

<div class="card lg:card-side bordered">
    <figure class="overflow-hidden">
        <div class="h-full bg-white">
            <img
                src={product.variants[internalIndex].variantImage}
                height="300"
                width="300"
                alt="product"
                class="w-full lg:w-80 h-96 lg:h-full object-contain"
            />
        </div>
    </figure>
    <div class="card-body">
        <div class="card-title mb-5">
            <h2 class="text-4xl">{product.product}</h2>
            <h3 class="text-md text-accent">{product.brand}</h3>
        </div>

        <div class="flex gap-x-4 mb-7">
            {#each product.productType as item}
                <div class="badge badge-outline">{item}</div>
            {/each}
        </div>
        <div class="flex flex-col h-full">
            <div class="flex flex-col gap-y-6 flex-1">
                <div class="flex gap-x-4 mb-5">
                    {#each product.variants as variant, i}
                        <div>
                            <button
                                on:click={() => internalIndex = i}
                                class="h-6 w-6 rounded-full border-2 border-accent"
                                style="background-color: {variant.variantColor};"
                            />
                        </div>
                    {/each}
                </div>
            </div>
            {#if product.variants[internalIndex].variantSale}
                <p class="alert alert-success">On sale!</p>
            {:else}
                <div v-else class="h-[56px]" />
            {/if}

            <div class="card-actions flex-col">
                <div>
                    <p
                        class="badge"
                        class:badge-success={stock >= 10}
                        class:badge-warning={stock < 10}
                        class:badge-error={stock <= 0}
                    >
                        {stock} in stock
                    </p>
                </div>

                <button on:click="{updateVariantStore}" on:click disabled={stock <= 0} class="btn btn-primary">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</div>
