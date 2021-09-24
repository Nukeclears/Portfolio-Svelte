<script>
    //components
    import ProductCard from '../components/productCard.svelte'

    //stores
    import { cartArray, variantIndex } from '../stores/stores'
    import { Productitems, Filtering } from '../stores/products'

    let InclusiveFilter = true

    const handleClick = (brand, product, variants) => {
        variantIndex.subscribe((value) => {
            $cartArray = [
                ...$cartArray,
                {
                    brand: brand,
                    product: product,
                    variants: variants[value],
                },
            ]
        })
    }

    $: filterItems = () => {
        if (InclusiveFilter) {
            var Filters = []
            var productList = []
            Filtering.forEach((option) => {
                if (option.selected) {
                    Filters.push(option.value)
                }
            })
            if (Filters == false) {
                return Productitems
            } else {
                Productitems.forEach((product) => {
                    var myproduct = product.productType.some((e) => Filters.includes(e))
                    if (myproduct) {
                        productList.push(product)
                    }
                })
                return productList
            }
        } else {
            var productTypeItems = Productitems
            Filtering.forEach((option) => {
                if (option.selected) {
                    productTypeItems = Object.values(productTypeItems).filter((item) =>
                        item.productType.includes(option.value)
                    )
                }
            })
            return productTypeItems
        }
    }
</script>

<div class="container px-5 md:px-0">
    <div class="grid grid-cols-12 lg:gap-x-10 gap-y-10 py-10">
        <div class="col-span-12 lg:col-span-2">
            <div class="flex flex-col">
                <ul class="menu mb-2">
                    <li>
                        <h2 class="text-xl mb-4">Filters</h2>
                    </li>
                    {#each Filtering as filter}
                        <li>
                            <label class="cursor-pointer label">
                                <span class="label-text text-lg">{filter.text}</span>
                                <input
                                    on:click={filterItems}
                                    type="checkbox"
                                    class="checkbox"
                                    bind:checked={filter.selected}
                                />
                            </label>
                        </li>
                    {/each}
                </ul>
                <div class="p-6 card bordered">
                    <div class="form-control">
                        <label class="cursor-pointer label">
                            <span class="label-text">Inclusive</span>
                            <input type="checkbox" class="toggle" bind:checked={InclusiveFilter} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center gap-y-10 col-span-12 lg:col-span-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                {#each filterItems() as product}
                    <ProductCard
                        brand={product.brand}
                        product={product.product}
                        productType={product.productType}
                        variants={product.variants}
                        on:click={() => handleClick(product.brand, product.product, product.variants)}
                    />
                {/each}
            </div>
            <div>
                <div class="btn-group">
                    <button class="btn">Previous</button>
                    <button class="btn btn-active">1</button>
                    <button class="btn">2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button>
                    <button class="btn">Next</button>
                </div>
            </div>
        </div>
    </div>
</div>
