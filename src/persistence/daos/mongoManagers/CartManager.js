import { cartsModel } from '../../models/carts.model.js';
import ProductManager from './ProductManager.js';

const productManager = new ProductManager();

export default class CartManager {
    async addCart() {
        try{
            const newCart = await cartsModel.create();
            return newCart
        } catch (error) {
            console.log(error)
        }
    }

    async getProductsFromCart(cartId) {
        try {
            const cart = await cartsModel.find({ _id: cartId });
            return cart
        } catch (error) {
            console.log(error)
        }
    }

    async addProductToCart(cartId, productId) {
        try {
            const cart = await cartsModel.findById(cartId);
            cart.products.push({ id: productId, quantity: 1 });
            cart.save();
            return cart
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProductInCart(cartId, productId) {
        try {
            const cart = await cartsModel.findById(cartId);
            const filteredProducts = cart.products.filter(product => product.id !== productId);
            cart.products = filteredProducts;
            cart.save();
            return cart
        } catch (error) {
            console.log(error)
        }
    }

    async replaceProductsInCart(cartId, products) {
        try {
            const cart = await cartsModel.findById(cartId);
            cart.products = products;
            cart.save();
            return cart
        } catch (error) {
            console.log(error)
        }
    }

    async updateProductInCart(cartId, productId, quantity) {
        try {
            const cart = await cartsModel.findById(cartId); 
            const product = cart.products.find(product => product.id === productId);
            product.quantity = quantity;
            cart.save();
            return cart
        } catch (error) {
            console.log(error)
        }
    }

    async emptyCart(cartId) {
        try {
            const cart = await cartsModel.findById(cartId);
            cart.products = [];
            cart.save();
            return cart
        } catch (error) {
            console.log(error)
        }
    }
}