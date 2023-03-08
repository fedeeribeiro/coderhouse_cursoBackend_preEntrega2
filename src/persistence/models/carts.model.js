import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({
    products: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true,
                unique: true
            },
            quantity: {
                type: Number,
                required: true
            },
            default: []
        }
    ]
});

cartsSchema.pre('find', function (next) {
    this.populate('products');
    next()
});

export const cartsModel = mongoose.model('Carts', cartsSchema);