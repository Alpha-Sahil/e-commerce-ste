import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['product'],
    endpoints: (build) => ({
        product: build.query({
            query: (body) => ({
                url: `/products/${body}`,
                method: 'GET',
            }),
        }),
    })
})

export const { useProductQuery } = productApi