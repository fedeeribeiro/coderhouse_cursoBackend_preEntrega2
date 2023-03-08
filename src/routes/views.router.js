import { Router } from 'express';
import CartManager from '../persistence/daos/mongoManagers/CartManager.js';
import ProductManager from '../persistence/daos/mongoManagers/ProductManager.js';

const router = Router();

const productManager = new ProductManager();
const cartManager = new CartManager();

router.get('/', async (request, response) => {
    const results = await productManager.getProducts({ limit: 10, page: 1 });
    const products = (results.payload).map(product => {
        return {
            id: product._id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock,
            category: product.category,
            status: product.status
        }
    });
    response.render('home', { products })
});

router.get('/realTimeProducts', (request, response) => {
    response.render('realTimeProducts')
});

router.get('/products', async (request, response) => {
    const results = await productManager.getProducts({ limit: 10, page: 1 });
    const products = (results.payload).map(product => {
        return {
            id: product._id.toString(),
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock,
            category: product.category,
            status: product.status
        }
    });
    response.render('products', { products })
});

router.get('/carts/:cartId', async (request, response) => {
    const { cartId } = request.params;
    const cart = await cartManager.getProductsFromCart(cartId);
    const products = (cart[0].products).map(product => {
        return {
            id: product._id._id.toString(),
            title: product._id.title,
            price: product._id.price,
            thumbnail: product._id.thumbnail,
            code: product._id.code,
            quantity: product.quantity,
            sum: product.quantity * product._id.price
        }
    });
    const sumCart = products.reduce((accumulator, currentValue) => accumulator + currentValue.sum, 0);
    response.render('cart',{ products, cartId, sumCart })
});

export default router;