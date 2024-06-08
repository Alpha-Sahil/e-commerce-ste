const { check } = require('express-validator');
const wishlist = require('../../database/models/wishlist')

const wishlistDestroyValidator = [
    check('wishlist')
        .not()
        .isEmpty()
        .withMessage('The product is required')
];

const destroy = async (id) => {
    await wishlist.deleteOne({_id: id})
}

module.exports = { destroy, wishlistDestroyValidator }