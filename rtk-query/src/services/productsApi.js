import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),

    deleteProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useGetProductsQuery, useDeleteProductsQuery } = productsApi;