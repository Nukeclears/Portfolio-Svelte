<script lang="ts">
    //data store
    import { cartArray } from '../stores/stores'

    //types
    import { productItemTYPE } from '../types/productTPE';

    //cart
    let cartContent: Array<productItemTYPE>

    const unsubscribe = cartArray.subscribe((value) => {
        cartContent = value
    })

    const clearCart = () => {
        $cartArray = []
    }

</script>

<div>
    <div class="hero h-64 bg-base-200">
        <div class="text-center hero-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">cart</h1>
                <p class="mb-5">{cartContent}</p>
            </div>
        </div>
    </div>
    <ul class="w-full steps pt-10">
        <li class="step step-primary">Cart</li>
        <li class="step">Shipping</li>
        <li class="step">Payment</li>
        <li class="step">Finished</li>
    </ul>
    <div class="container py-10 flex flex-col gap-y-10">
        <div class="overflow-x-auto">
            {#if cartContent.length > 0}
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th />
                            <th>Name</th>
                            <th>Color</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {#each cartContent as item}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="w-12 h-12 mask mask-squircle">
                                                <img
                                                    src={item.variants[item.variantIndex].variantImage}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">{item.brand}</div>
                                            <div class="text-sm opacity-50">{item.product}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.variants[item.variantIndex].variantColor}</td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        {/each}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th />
                            <th>Name</th>
                            <th>Color</th>
                            <th />
                        </tr>
                    </tfoot>
                </table>
            {:else}
                <div class="alert alert-error my-16 text-xl">no items!</div>
            {/if}
        </div>
        <div class="flex justify-between">
            {#if cartContent.length > 0}
                <button on:click={clearCart} class="btn btn-error"> clear </button>
            {/if}
            {#if cartContent.length > 0}
                <button class="btn btn-success"> Continue </button>
            {/if}
        </div>
    </div>
</div>
