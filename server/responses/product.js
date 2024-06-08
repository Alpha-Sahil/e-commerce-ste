require('dotenv').config()

const collection = (products) => {
    return products.map((product) => {
        return document(product)
    })    
}

const document = (product) => {
    return ({
        ...product.toObject(),
        imageUrl: `${process.env.BASE_URL}/assets/${product.image}`
    })
}

module.exports = { collection, document }