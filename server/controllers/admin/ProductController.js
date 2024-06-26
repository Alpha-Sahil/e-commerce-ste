const createProduct = require('../../actions/admin/products/createProduct')
const productResponse = require('../../responses/product')
const product = require('../../database/models/product')
const { validationResult } = require('express-validator')

const index = async (request, response) => {
    response.status(200)
        .json({
            status: 'success',
            products: productResponse.collection(
                await product.find(request.query.category
                    ? {category: request.query.category}
                    : {}
                )
            )
        })
}

const create = async (request, response) => {
    let errors = validationResult(request)

    if (!errors.isEmpty()) return response.status(200).json({errors: errors.array()})

    let product = await createProduct.create(request.body, request.file)

    response.status(200)
        .json({
            status: 'sucess',
            message: 'Product Created Successfully',
            product: product,
        })
}

const show = async (request, response) => {
    let status = 200

    let fetchedProduct = await product.find({ _id: request.params.product })

    if (!fetchedProduct.length) status = 404

    response.status(status)
        .json({
            status: 'success',
            product: fetchedProduct
        }) 
}

module.exports = { index, create, show }