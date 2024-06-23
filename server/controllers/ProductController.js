const product = require('../database/models/product')
const productResponse = require('../responses/product')

const show = async (request, response) => {
    let fetchedProduct = await product.find({ _id: request.params.product })

    response.json({
        status: 'success',
        product: productResponse.document(fetchedProduct[0]),
    })
}

module.exports = { show }