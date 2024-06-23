const review = require('../../database/models/review')

const destroy = async (reviewToBeDeleted) => {
    await review.deleteOne({ _id: reviewToBeDeleted._id })
}

module.exports = { destroy }