const category = require('../../../database/models/category')
const FILE_UPLOADED_PATH = 'categories'

const update = async (id, input, image) => {
    let data = {
        name: input.name,
        description: input.description,
        slug: input.slug,
        active: input.active,
    };

    if (Boolean(image)) data.image = `${FILE_UPLOADED_PATH}/${image.filename}`

    return await category.findOneAndUpdate({_id: id}, data)
}

module.exports = {
    update
}