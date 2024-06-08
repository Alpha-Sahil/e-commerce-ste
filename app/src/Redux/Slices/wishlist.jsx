import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    wishlists: [],
    status: 'idle',
    loading: true,
}

export const fetchWishlist = createAsyncThunk(
    'wishlists/fetch',
    async () => {
        let response = await axios.get('http://localhost:3000/wishlists')

        return response.data.wishlists
    }
)

export const createWishlist = createAsyncThunk(
    'wishlists/create',
    async (product) => {
        let dataform =  new FormData();

        dataform.append('product', product)

        let response = await axios.post('http://localhost:3000/wishlists/create', { dataform })

        return response.data.wishlist
    }
)

export const wishlistSlice = createSlice({
    name: 'wishlists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWishlist.pending, (state) => {
            state.status = 'loading'
            state.loading = true
        }),

        builder.addCase(fetchWishlist.fulfilled, (state, action) => {
            state.wishlists = action.payload
            state.status = 'idle'
            state.loading = false
        }),

        builder.addCase(createWishlist.pending, (state) => {
            state.status = 'loading'
            state.loading = true
        }),

        builder.addCase(createWishlist.fulfilled, (state, action) => {
            state.wishlists = action.payload
            state.status = 'idle'
            state.loading = false
        })
    }
})

export default wishlistSlice.reducer