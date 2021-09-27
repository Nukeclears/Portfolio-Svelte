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
                variantId: 1432,
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
                variantId: 5212,
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
                variantId: 6543,
                variantColor: 'Pink',
                variantImage: require('../images/hat-pink.png'),
                variantSale: true,
                variantQuantity: 99,
            },
            {
                variantId: 7657,
                variantColor: 'Blue',
                variantImage: require('../images/hat-blue.jpg'),
                variantSale: false,
                variantQuantity: 3,
            },
        ],
    },
    {
        brand: 'Thomas',
        product: 'Not a hat',
        productType: ['Thomas', 'hat'],
        variants: [
            {
                variantId: 4563,
                variantColor: 'Blue',
                variantImage: require('../images/hat-blue.jpg'),
                variantSale: false,
                variantQuantity: 64,
            },
            {
                variantId: 3242,
                variantColor: 'Pink',
                variantImage: require('../images/hat-pink.png'),
                variantSale: true,
                variantQuantity: 99,
            },
        ],
    },
    {
        brand: 'Thomas',
        product: 'Perfect hat',
        productType: ['Thomas', 'hat'],
        variants: [
            {
                variantId: 6423,
                variantColor: 'Blue',
                variantImage: require('../images/hat-blue.jpg'),
                variantSale: false,
                variantQuantity: 4,
            },
            {
                variantId: 6546,
                variantColor: 'Pink',
                variantImage: require('../images/hat-pink.png'),
                variantSale: true,
                variantQuantity: 99,
            },
        ],
    },
    {
        brand: 'Thomas',
        product: 'Imperfect hat',
        productType: ['Thomas', 'hat'],
        variants: [
            {
                variantId: 6524,
                variantColor: 'Pink',
                variantImage: require('../images/hat-pink.png'),
                variantSale: true,
                variantQuantity: 99,
            },
            {
                variantId: 4319,
                variantColor: 'Blue',
                variantImage: require('../images/hat-blue.jpg'),
                variantSale: false,
                variantQuantity: 0,
            },
        ],
    },
    {
        brand: 'Vue',
        product: 'socky socks',
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
        product: 'shmocks',
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
                variantId: 1432,
                variantColor: 'green',
                variantImage: require('../images/socks-green.png'),
                variantSale: false,
                variantQuantity: 0,
            },
        ],
    },
]

export let Filtering = [
    { text: 'Vue', value: 'Vue', selected: false },
    { text: 'Thomas', value: 'Thomas', selected: false },
    { text: 'Smeckel', value: 'Smeckel', selected: false },
    { text: 'socks', value: 'socks', selected: false },
    { text: 'hat', value: 'hat', selected: false },
]
