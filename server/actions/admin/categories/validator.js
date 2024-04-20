const category = require('../../../database/models/category')
const { body, check } = require('express-validator');

exports.validate = [
    check('name').not().isEmpty().withMessage('The Name is required'),
    check('description', 'The Description is required').not().isEmpty().isLength({ max: 255 }).withMessage('Max length is 100 bytes'),
    check('slug', 'The slug is required').not().isEmpty(),
    check('parent').optional()
        .custom(async (value, request) => {
        if (value) {   
            let parent = await category.find({ _id: value })
            
            if (!parent) throw new Error('Parent is invalid!')
        }
    }),
    check('active', 'The acitve field is required').not().isEmpty(),
    check('image', 'Invalid does not Empty').optional(),
]