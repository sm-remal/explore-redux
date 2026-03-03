import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsApi";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (status) => {
            status.isLoading = true;
            status.isError = false;
            status.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (status, action) => {
            status.isLoading = false;
            status.products = action.payload;
            status.isError = false;
            status.error = null;
        })
        builder.addCase(fetchProducts.rejected, (status, action) => {
            status.isLoading = false;
            status.isError = true;
            status.error = "Failed to data fetch" | action.error;
        })
    }
})

export default productsSlice.reducer