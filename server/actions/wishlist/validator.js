const product = require('../../database/models/product')
const wishlist = require('../../database/models/wishlist')
const { check } = require('express-validator');
const { ObjectId } = require('mongodb');

exports.validate = [
    check('product')
        .not()
        .isEmpty()
        .withMessage('The product is required')
        .custom(async (value) => {
            if (value && !ObjectId.isValid(value)) throw new Error ('Invalid product')
            
            let founded = await product.find({ _id: value })

            if (!founded.length) throw new Error('Invalid! product not found')

            let exists = await wishlist.find({ product: value })

            if (exists.length) throw new Error('already added')
    }),
]