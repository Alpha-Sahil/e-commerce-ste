const wishlist = require('../../database/models/wishlist')

const create = async (input) => {
    return await wishlist.create({
        product: input.product
    })
}

module.exports = { create }