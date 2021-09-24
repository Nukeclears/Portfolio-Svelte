export let Productitems = [
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
];


export let Filtering = [
    { text: "Vue", value: "Vue", selected: false },
    { text: "Thomas", value: "Thomas", selected: false },
    { text: "Smeckel", value: "Smeckel", selected: false },
    { text: "socks", value: "socks", selected: false },
    { text: "hat", value: "hat", selected: false },
];