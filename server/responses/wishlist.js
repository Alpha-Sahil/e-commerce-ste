const productResponse = require('./product')

const collection = (wishlists) => {
    return wishlists.map((wishlist) => {
        return document(wishlist)
    })
}

const document = (wishlist) => {
    return ({
        ...wishlist.toObject(),
        product: productResponse.document(wishlist.product)
    })
}

module.exports = { collection, document }