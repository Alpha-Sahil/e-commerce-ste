const product = require('../../../database/models/product')

const create = async (input, uploadedImage) => {
    let data = {
        name: input.name,
        description: input.description,
        image: Boolean(uploadedImage) ? `${FILE_UPLOADED_PATH}/${uploadedImage.filename}` : '',
        slug: input.slug,
        category: input.category,
        active: input.active,
        stocks: input.stocks,
    };

    return await product.create(data)
}

module.exports = { create }