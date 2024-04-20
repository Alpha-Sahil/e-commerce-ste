const category = require('../../../database/models/category')

const deleteCategory = async (id) => {
    await category.deleteOne({_id: id})
}

module.exports = deleteCategory