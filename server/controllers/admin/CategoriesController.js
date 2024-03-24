const Category = require('../../database/models/category')

const index = async (request, response) => {
    response.json({
        status: 'success',
        categories: await Category.find({})
    })
}

module.exports = { index }