import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    groupedCategories: [], 
    status: 'idle',
    loading: true,
}

export const fetchCategories = createAsyncThunk(
    'categories/fetch',
    async () => {
        let response = await axios.get('http://localhost:3000/admin/categories')

        return response.data.categories
    }
)

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.status = 'loading'
            state.loading = true
        }),

        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.status = 'idle'
            state.loading = false
        })
    }
})

export default categorySlice.reducer

// export const { groupedCategories } = categorySlice.actions;
