import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['category'],
    endpoints: (build) => ({
        createCategory: build.mutation({
            query: (body) => ({
                url: 'admin/categories/create',
                method: 'POST',
                body: body,
            }),
        }),

        updateCategory: build.mutation({
            query: (data) => ({
                url: `http://localhost:3000/admin/categories/${data.category}/edit`,
                method: 'PUT',
                body: data.body,
            }),
        }),

        destroyCategory: build.mutation({
            query: (category) => ({
                url: `admin/categories/${category}/delete`,
                method: 'DELETE',
            }),
        })
    })
})

export const { useCreateCategoryMutation, useUpdateCategoryMutation, useDestroyCategoryMutation } = categoryApi