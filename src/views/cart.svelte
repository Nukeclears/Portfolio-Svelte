<script>
    import { cartArray } from '../stores/stores'

    let cartContent

    const unsubscribe = cartArray.subscribe((value) => {
        cartContent = value;
    })
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
                                                src={item.variants.variantImage}
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
                            <td>{item.variants.variantColor}</td>
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
        </div>
        <div v-else class="alert alert-error my-16 text-xl">no items!</div>
        <div class="flex justify-between">
            <button class="btn btn-error"> clear </button>
            <button class="btn btn-success"> Continue </button>
        </div>
    </div>
</div>
