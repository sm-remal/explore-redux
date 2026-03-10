import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  //   baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: "Product", id })), { type: "Product", id: "LIST" }] : [{ type: "Product", id: "LIST" }]
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Product", id },
        { type: "Product", id: "LIST" }
      ]
    }),
  }),
})

export const { useGetProductsQuery, useDeleteProductMutation } = productsApi;