const productResponse = require('./product')

const collection = (reviews) => {
    return reviews.map((review) => {
        return document(review)
    })
}

const document = (review) => {
    return ({
        ...review.toObject(),
        product: productResponse.document(review.product)
    })
}

module.exports = { document, collection }