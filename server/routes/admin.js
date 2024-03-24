const express = require('express')
const router = express.Router()
const CategoriesController = require('../controllers/admin/CategoriesController')

router.get('/categories', CategoriesController.index)
module.exports = router