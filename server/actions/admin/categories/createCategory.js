const category = require('../../../database/models/category')
const FILE_UPLOADED_PATH = 'categories'

const create = async ({name, description, parent, slug, active}, uploadedImage) => {
    let data = {
        name: name,
        description: description,
        image: Boolean(uploadedImage) ? `${FILE_UPLOADED_PATH}/${uploadedImage.filename}` : '',
        slug: slug,
        active: active,
    };

    if (parent) data.parent = parent

    return await category.create(data)
}

module.exports = { create }