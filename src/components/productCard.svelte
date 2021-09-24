<div class="card lg:card-side bordered">
    <figure class="overflow-hidden">
        <div class="h-full bg-white">
            <img height="300" width="300" alt="product" class="w-full lg:w-80 h-96 lg:h-full object-contain" />
        </div>
    </figure>
    <div class="card-body">
        <div class="card-title mb-5">
            <h2 class="text-4xl">product</h2>
            <h3 class="text-md text-accent">brand</h3>
        </div>

        <div class="flex gap-x-4 mb-7">
            <div v-for="item in productType" :key="item" class="badge badge-outline">item</div>
        </div>
        <div class="flex flex-col h-full">
            <div class="flex flex-col gap-y-6 flex-1">
                <div class="flex gap-x-4 mb-5">
                    <div>
                        <button class="h-6 w-6 rounded-full border-2 border-accent" />
                    </div>
                </div>
            </div>
            <p v-if="onSale" class="alert alert-success">On sale!</p>
            <div v-else class="h-[56px]" />
            <div class="card-actions flex-col">
                <div>
                    <p v-if="inStock > 10" class="badge badge-success">In stock</p>
                    <p class="badge badge-warning">Almost out!</p>
                    <p class="badge badge-error">Out of stock</p>
                </div>

                <button class="btn btn-primary"> Add to Cart </button>
            </div>
        </div>
    </div>
</div>
