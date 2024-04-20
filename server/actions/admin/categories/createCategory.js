const category = require('../../../database/models/category')
const multer  = require('multer');
const path = require('path');
const FILE_UPLOADED_PATH = 'categories'

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../../assets/categories/'));
    },

    filename: (req, file, cb) => {
        cb(null, `image-${Date.now()}` + path.extname(file.originalname))
    }
});

const multerFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg|gif)$/)) return cb(new Error('Please upload a Image'))

    cb(null, true)
};

const uploadCategoryImage = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

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

module.exports = {uploadCategoryImage, create}