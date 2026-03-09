import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "../features/products/productsSlice"
import { productsApi } from '../services/productsApi'
// import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})
// Refetch
// setupListeners(store.dispatch)