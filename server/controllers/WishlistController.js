const createWishlist = require('../actions/wishlist/createWishlist')
const destroyWishlist = require('../actions/wishlist/destroyWishlist')
const wishlist = require('../database/models/wishlist')
const wishlistResponse = require('./../responses/wishlist')
const { validationResult } = require('express-validator')

const index = async (request, response) => {
    response.status(200)
        .json({
            status: 'success',
            wishlists: wishlistResponse.collection(await wishlist.find({}).populate('product'))
        })
}

const create = async (request, response) => {
    let errors = validationResult(request)

    if (!errors.isEmpty()) return response.status(200).json({errors: errors.array()})

    await createWishlist.create(request.body)

    response.status(200)
        .json({
            status: true,
            message: 'Wishlist Created Successfully'
        })
}

const destroy = async (request, response) => {
    let errors = validationResult(request)

    if (!errors.isEmpty()) return response.status(200).json({errors: errors.array()})

    await destroyWishlist.destroy(request.params.wishlist)

    response.status(200)
        .json({
            status: true,
            message: 'Wishlist Removed Successfully'
        })
}

module.exports = { index, create, destroy }