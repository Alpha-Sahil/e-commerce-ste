import reducers from './Reducers.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { categoryApi } from './Apis/category.jsx'
import { productApi } from './Apis/product.jsx'
import { reviewApi } from './Apis/review.jsx'
import { wishlistApi } from './Apis/wishlist.jsx'

const Index = () => configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
                                            .concat(categoryApi.middleware)
                                            .concat(productApi.middleware)
                                            .concat(reviewApi.middleware)
                                            .concat(wishlistApi.middleware),
})

export default Index