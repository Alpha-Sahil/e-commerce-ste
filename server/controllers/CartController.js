const cart = require('../database/models/cart')
const { validationResult } = require('express-validator')

const create = (request, response) => {
    let errors = validationResult(request)

    if (!errors.isEmpty()) return response.status(200).json({errors: errors.array()})
}   

module.exports = {
    create,
}