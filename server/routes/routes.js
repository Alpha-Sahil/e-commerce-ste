const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const reviewController = require('../controllers/ReviewsController')
const reviewVadiations = require('../actions/reviews/validator')
const WishlistController = require('../controllers/WishlistController')
const wishlistValidation = require('../actions/wishlist/validator')
const { wishlistDestroyValidator } = require('../actions/wishlist/destroyWishlist')

router.get('/products/:product', ProductController.show)

router.get('/products/:product/reviews', reviewController.index)
router.post('/products/:product/reviews/create', [reviewVadiations.validate], reviewController.create)
router.delete('/products/:product/reviews/:review/delete', reviewController.destroy)

router.get('/wishlists', WishlistController.index)
router.post('/wishlists/create', [wishlistValidation.validate], WishlistController.create)
router.delete('/wishlists/:wishlist/delete', [wishlistDestroyValidator], WishlistController.destroy)

module.exports = router