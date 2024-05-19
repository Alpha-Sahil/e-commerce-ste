const multer  = require('multer');
const path = require('path');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../../assets/products/'));
    },

    filename: (req, file, cb) => {
        cb(null, `image-${Date.now()}` + path.extname(file.originalname))
    }
});

const multerFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg|gif)$/)) return cb(new Error('Please upload a Image'))

    cb(null, true)
};

const uploadProduct = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

module.exports = { uploadProduct }