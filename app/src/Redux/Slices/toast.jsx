import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: null
}

export const ToastSlice = createSlice({
    name: 'progressBar',
    initialState,
    reducers: {
        showToast (state, action)  {
            state.message = action.payload
        },

        hideToast (state, action) {
            state.message = null
        },
    },    
})

export default ToastSlice.reducer

export const { showToast, hideToast } = ToastSlice.actions