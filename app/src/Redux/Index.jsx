import { configureStore } from '@reduxjs/toolkit'
import reducers from './Reducers.jsx'
import { wishlistApi } from './Apis/wishlist.jsx'

const Index = () => configureStore({
    reducer: reducers,
    // [wishlist.reducerPath]: wishlist.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wishlistApi.middleware),
})

export default Index