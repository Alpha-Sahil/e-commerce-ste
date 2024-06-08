import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    products: [], 
    status: 'idle',
    loading: true,
}

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (categoryId = null) => {
        let response = await axios.get(`http://localhost:3000/admin/products`, {
            params: {
                category: categoryId
            }
        })

        return response.data.products
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
            state.loading = true
        }),

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.status = 'idle'
            state.loading = false
        })
    }
})

export default productSlice.reducer
