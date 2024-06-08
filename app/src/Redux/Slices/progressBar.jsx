import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showProgressBar: false
}

export const progressBarSlice = createSlice({
    name: 'progressBar',
    initialState,
    reducers: {
        toggleProgressBar (state, action)  {
            if (action.payload === 'show') state.showProgressBar = true

            else state.showProgressBar = false
        }
    },    
})

export default progressBarSlice.reducer

export const { toggleProgressBar } = progressBarSlice.actions