const product = require('../../../database/models/product')
const { check } = require('express-validator');
const { ObjectId } = require('mongodb');

exports.productValidator = [
    check('name').not().isEmpty().withMessage('The Name is required'),
    check('description', 'The Description is required').not().isEmpty().isLength({ max: 255 }).withMessage('Max length is 100 bytes'),
    check('slug', 'The slug is required').not().isEmpty(),
    check('category')
        .not()
        .isEmpty()
        .withMessage('The category is required')
        .custom(async (value) => {
            if (!value) throw new Error('The Category field is required')

            if (!ObjectId.isValid(Value)) throw new Error ('Invalid category')
            
            try {
                let parent = await product.find({ _id: value })

                if (!parent) throw new Error('Error! category not found')
            } catch(error) {
                throw new Error('Something went wrong')
            }
        }),
    check('active', 'The acitve field is required').not().isEmpty(),
    check('image', 'The image is required').not().isEmpty(),
]