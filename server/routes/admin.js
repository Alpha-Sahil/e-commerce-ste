const express = require('express')
const router = express.Router()
const CategoriesController = require('../controllers/admin/CategoriesController')
const ProductController = require('../controllers/admin/ProductController')
const { categoryValidator } = require('../actions/admin/categories/validator')
const { productValidator } = require('../actions/admin/products/validator')
const { uploadCategoryImage } = require('../actions/admin/categories/uploadImage')
const { uploadProduct }  = require('../actions/admin/products/uploadProduct')

router.get('/categories', CategoriesController.index)
router.post('/categories/create', [uploadCategoryImage.single('image'), categoryValidator], CategoriesController.create)
router.put('/categories/:id/edit', [uploadCategoryImage.single('image'), categoryValidator], CategoriesController.update)
router.delete('/categories/:id/delete', CategoriesController.deleteCategoryAdmin)

router.get('/categories/:category/products', ProductController.index)

router.get('/products', ProductController.index)
router.post('/products/create', [uploadProduct.single('image'), productValidator], ProductController.create)

module.exports = router