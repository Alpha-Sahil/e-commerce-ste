const express = require('express')
const router = express.Router()
const WishlistController = require('../controllers/WishlistController')
const wishlistValidation = require('../actions/wishlist/validator')
const { wishlistDestroyValidator } = require('../actions/wishlist/destroyWishlist')

router.get('/wishlists', WishlistController.index)
router.post('/wishlists/create', [wishlistValidation.validate], WishlistController.create)
router.delete('/wishlists/:wishlist/delete', [wishlistDestroyValidator], WishlistController.destroy)

module.exports = router