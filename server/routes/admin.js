const express = require('express')
const router = express.Router()
const CategoriesController = require('../controllers/admin/CategoriesController')
const { validate } = require('../actions/admin/categories/validator')
const createCategory = require('../actions/admin/categories/createCategory')

router.get('/categories', CategoriesController.index)
router.post('/categories/create', [createCategory.uploadCategoryImage.single('image'), validate], CategoriesController.create)
router.put('/categories/:id/edit', [createCategory.uploadCategoryImage.single('image'), validate], CategoriesController.update)
router.delete('/categories/:id/delete', CategoriesController.deleteCategoryAdmin)

module.exports = router