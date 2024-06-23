import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const wishlistApi = createApi({
    reducerPath: 'wishlistApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['wishlist'],
    endpoints: (build) => ({
        createWishlist: build.mutation({
            query: (body) => ({
                url: '/wishlists/create',
                method: 'POST',
                body: body,
            }),
        }),

        destroyWishlist: build.mutation({
            query: (wishlist) => ({
                url: 'wishlists/${wishlist}/delete',
                method: 'DELETE',
            }),
        })
    })
})

export const { useCreateWishlistMutation, useDestroyWishlistMutation } = wishlistApi