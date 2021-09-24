<script>
    import ProductCard from '../components/productCard.svelte';
    import { cartArray, variantIndex } from '../stores/stores';

    let ItemIndex;

    const unsubscribe = variantIndex.subscribe(value => {
		ItemIndex = value;
	});

    const handleClick = (brand, product, variants) => {
        $cartArray = [...$cartArray, {
            brand: brand,
            product: product,
            variants: variants[ItemIndex],
        }];
	}

    let Productitems = [
        {
            brand: 'Vue',
            product: 'test',
            productType: ['Vue', 'socks'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: require('../images/socks-green.png'),
                    variantSale: true,
                    variantQuantity: 12,
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: require('../images/socks-blue.png'),
                    variantSale: false,
                    variantQuantity: 1,
                },
            ],
        },
        {
            brand: 'Vue',
            product: 'Smocks',
            productType: ['Vue', 'socks'],
            variants: [
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: require('../images/socks-blue.png'),
                    variantSale: false,
                    variantQuantity: 1,
                },
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: require('../images/socks-green.png'),
                    variantSale: false,
                    variantQuantity: 0,
                },
            ],
        },
        {
            brand: 'Thomas',
            product: 'Hat',
            productType: ['Thomas', 'hat'],
            variants: [
                {
                    variantId: 2145,
                    variantColor: 'Blue',
                    variantImage: require('../images/hat-blue.jpg'),
                    variantSale: false,
                    variantQuantity: 0,
                },
                {
                    variantId: 6421,
                    variantColor: 'Pink',
                    variantImage: require('../images/hat-pink.png'),
                    variantSale: true,
                    variantQuantity: 99,
                },
            ],
        },
        {
            brand: 'Smeckel',
            product: 'Deluxe hat',
            productType: ['Smeckel', 'hat'],
            variants: [
                {
                    variantId: 6421,
                    variantColor: 'Pink',
                    variantImage: require('../images/hat-pink.png'),
                    variantSale: true,
                    variantQuantity: 99,
                },
                {
                    variantId: 2145,
                    variantColor: 'Blue',
                    variantImage: require('../images/hat-blue.jpg'),
                    variantSale: false,
                    variantQuantity: 3,
                },
            ],
        },
    ]
</script>

<div class="container px-5 md:px-0">
    <div class="grid grid-cols-12 lg:gap-x-10 gap-y-10 py-10">
        <div class="col-span-12 lg:col-span-2">
            <div class="flex flex-col">
                <ul class="menu mb-2">
                    <li>
                        <h2 class="text-xl mb-4">Filters</h2>
                    </li>
                    <li>
                        <label class="cursor-pointer label">
                            <span class="label-text text-lg">item text</span>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </li>
                </ul>
                <div class="p-6 card bordered">
                    <div class="form-control">
                        <label class="cursor-pointer label">
                            <span class="label-text">Inclusive</span>
                            <input type="checkbox" class="toggle" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center gap-y-10 col-span-12 lg:col-span-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                {#each Productitems as product}
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
