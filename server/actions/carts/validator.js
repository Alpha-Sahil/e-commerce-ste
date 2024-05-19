const { check } = require('express-validator');

exports.validate = [
    check('product').not().isEmpty().withMessage('The product is required'),
    check('product_total').not().isEmpty().isNumeric().withMessage('Invalid total value'),
]
