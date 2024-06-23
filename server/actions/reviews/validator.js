const product = require('../../database/models/product')
const { check } = require('express-validator');

exports.validate = [
    check('rating').optional(),
    check('message').not().isEmpty().withMessage('The message is required'),
    check('media').optional(),
    check('product').not()
                .isEmpty()
                .withMessage('The product is required')
                .custom(async (value) => {
                    let founded = await product.find({_id: value})

                    if (!founded.length) throw new Error ('Invalid product')
                }),
]
