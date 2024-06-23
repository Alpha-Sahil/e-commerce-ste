import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    reviews: [],
    status: 'idle',
    loading: true,
}

export const fetchReviews = createAsyncThunk(
    'reviews/fetch',
    async (product) => {
        let response = await axios.get(`http://localhost:3000/products/${product}/reviews`)

        return response.data.reviews
    }
)

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview(state, action) {
            state.reviews.push(action.payload)
        },

        removeReview(state, action) {
            state.reviews = state.reviews.filter(review => review._id != action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.pending, (state) => {
            state.status = 'loading'
            state.loading = true
        }),

        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.reviews = action.payload
            state.status = 'idle'
            state.loading = false
        })
    }
})

export default reviewSlice.reducer

export const { addReview, removeReview } = reviewSlice.actions