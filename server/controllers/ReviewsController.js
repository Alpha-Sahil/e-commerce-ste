const createReviews = require('../actions/reviews/createReviews')
const deleteReviews = require('../actions/reviews/deleteReviews')
const review = require('../database/models/review')
const reviewResponse = require('../responses/review')
const { validationResult } = require('express-validator')

const index = async (request, response) => {
    response.status(200).json({
        status: 'success',
        reviews: reviewResponse.collection(await review.find({ product: request.params.product}).populate('product'))
    })
}

const create = async (request, response) => {
    let errors = validationResult(request)

    if (!errors.isEmpty()) return response.status(200).json({errors: errors.array()})

    let review = await createReviews.create(request.params.product, request.body);

    return response.status(200)
            .json({
                status: 'success',
                message: 'Review Added Succesfully',
                review: review
            })
}

const destroy = async (request, response) => {
    let hasReview = await review.find({ _id: request.params.review})

    if ((!hasReview.length)) return response.status(200).json({ errors: [{delete: 'Review does not exists'}] })

    deleteReviews.destroy(hasReview[0])
    
    return response.status(200)
            .json({
                status: 'success',
                message: 'Review Deleted Succesfully',
            })
}

module.exports = { index, create, destroy }