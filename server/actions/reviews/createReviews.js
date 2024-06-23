const review = require('../../database/models/review')

const create = async (product, input, media = null) => {
    return await review.create({
        message: input.message,
        rating: input.rating,
        media: media,
        product: product,
    })
}

module.exports = { create }
