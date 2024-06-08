import categories from './Slices/categories';
import products from './Slices/products';
import progressBar from './Slices/progressBar';
import toast from './Slices/toast';
import wishlists from './Slices/wishlist';
import { combineReducers } from '@reduxjs/toolkit';
import { wishlistApi } from './Apis/wishlist';

const rootReducer = combineReducers({
    category: categories,
    product: products,
    wishlist: wishlists,
    progressBar: progressBar,
    toast: toast,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
});

export default rootReducer;
