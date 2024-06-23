import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['review'],
    endpoints: (build) => ({
        createReview: build.mutation({
            query: (body) => ({
                url: `/products/${body.product}/reviews/create`,
                method: 'POST',
                body: body.data,
            }),
        }),
        deleteReview: build.mutation({
            query: (body) => ({
                url: `/products/${body.product}/reviews/${body.review}/delete`,
                method: 'DELETE',
            }),  
        })
    })
})

export const { useCreateReviewMutation, useDeleteReviewMutation } = reviewApi