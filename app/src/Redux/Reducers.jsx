import categories from './Slices/categories';
import products from './Slices/products';
import progressBar from './Slices/progressBar';
import review from './Slices/review'
import toast from './Slices/toast';
import wishlists from './Slices/wishlist';
import { categoryApi } from './Apis/category';
import { combineReducers } from '@reduxjs/toolkit';
import { productApi } from './Apis/product';
import { reviewApi } from './Apis/review';
import { wishlistApi } from './Apis/wishlist';

const rootReducer = combineReducers({
    category: categories,
    product: products,
    progressBar: progressBar,
    review: review,
    toast: toast,
    wishlist: wishlists,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
});

export default rootReducer;
