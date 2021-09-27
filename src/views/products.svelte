<script>
    //components
    import ProductCard from '../components/productCard.svelte'

    //stores
    import { cartArray, variantIndex } from '../stores/stores'
    import { Productitems, Filtering } from '../stores/products'

    //variables
    let InclusiveFilter = true
    let totalItems = Productitems.length
    let currentPage = 1
    let pageSize = 4

    //pagination

    const DecrementPage = () => {
        if (currentPage > 1) {
            currentPage --
        }
    }

    const IncrementPage = () => {
        if (currentPage < totalPages().totalPages) {
            currentPage ++
        }
    }

    const totalPages = () => {
        let returner
        let totalPages = Math.ceil(totalItems / pageSize)
        var totalPagesArray = [...Array(totalPages).keys()]
        returner = { totalPagesArray, totalPages }
        return returner
    }

    $: Pagination = () => {
        let PaginatedProductitems
        let startIndex = (currentPage - 1) * pageSize
        let endIndex = Math.min(startIndex + pageSize, totalItems);
        PaginatedProductitems = filterItems().slice(startIndex, endIndex)
        return PaginatedProductitems
    }

    //cart handler

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

    //filter

    $: filterItems = () => {
        if (InclusiveFilter) {
            let Filters = []
            let productList = []
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
                currentPage = 1
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
            currentPage = 1
            return productTypeItems
        }
    }
</script>

<div class="container px-5 md:px-0">
    <div class="grid grid-cols-12 lg:gap-x-10 gap-y-10 py-10">
        <div class="col-span-12 lg:col-span-2">
            <div class="flex flex-col gap-y-7">
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
                <div class="btn-group">
                    <button on:click="{DecrementPage}" class="btn">«</button> 
                    {#each totalPages().totalPagesArray as page, i}
                        <button class="btn" on:click="{() => currentPage = i + 1}" class:btn-active={currentPage - 1 == i}>{i + 1}</button>
                    {/each}
                    <button on:click="{IncrementPage}" class="btn">»</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center gap-y-10 col-span-12 lg:col-span-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                {#each Pagination() as product}
                    <ProductCard
                        brand={product.brand}
                        product={product.product}
                        productType={product.productType}
                        variants={product.variants}
                        on:click={() => handleClick(product.brand, product.product, product.variants)}
                    />
                {/each}
            </div>
        </div>
    </div>
</div>
