import { Router } from 'express';
import ProductManager from '../persistence/daos/mongoManagers/ProductManager.js';

const router = Router();

const productManager = new ProductManager('./utils/products.json');

router.get('/', async (request, response) => {
    const products = await productManager.getProducts();
    response.render('home', { products })
});

router.get('/realTimeProducts', (request, response) => {
    response.render('realTimeProducts')
});

export default router;