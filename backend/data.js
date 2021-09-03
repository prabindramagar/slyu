import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
        name:'lye',
        email:'lye@gmail.com',
        password: bcrypt.hashSync('12345', 8),
        isAdmin: true,
    },

    {
        name:'Bas',
        email:'yal@gmail.com',
        password: bcrypt.hashSync('12345', 8),
        isAdmin: false,
    },
],
    products: [
        {
            name: 'Puma T-shirt',
            category: 'Shirts',
            image: '/images/product-1.jpg',
            price: 1200,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews:10,
            description: 'high quality product',
        },

        {
            name: 'HRX Shoe',
            category: 'Shoes',
            image: '/images/product-2.jpg',
            price: 2500,
            countInStock: 10,
            brand: 'HRX',
            rating: 4,
            numReviews:10,
            description: 'high quality product',
        },

        {
            name: 'Gray Jogger',
            category: 'Joggers',
            image: '/images/product-3.jpg',
            price: 1400,
            countInStock: 0,
            brand: 'Epsion',
            rating: 4.5,
            numReviews:10,
            description: 'high quality product',
        },

        {
            name: 'Puma blue T-shirt',
            category: 'Shirts',
            image: '/images/product-4.jpg',
            price: 1000,
            countInStock: 10,
            brand: 'Puma',
            rating: 3.5,
            numReviews:10,
            description: 'high quality product',
        },

        {
            name: 'Gray Shoe',
            category: 'Shoes',
            image: '/images/product-5.jpg',
            price: 2300,
            countInStock: 0,
            brand: 'Puma',
            rating: 5,
            numReviews:10,
            description: 'high quality product',
        },

        {
            name: 'Black T-shirt',
            category: 'Shirts',
            image: '/images/product-6.jpg',
            price: 1200,
            countInStock: 5,
            brand: 'Puma',
            rating: 4,
            numReviews:10,
            description: 'high quality product',
        },

        {
            name: 'HRX Shocks',
            category: 'Shocks',
            image: '/images/product-7.jpg',
            price: 800,
            countInStock: 10,
            brand: 'HRX',
            rating: 3,
            numReviews:10,
            description: 'high quality product',
        },

        {
            name: 'Fossil Watch',
            category: 'Watches',
            image: '/images/product-8.jpg',
            price: 12000,
            countInStock: 0,
            brand: 'Fossil',
            rating: 5,
            numReviews:10,
            description: 'high quality product',
        },

    ]
}

export default data