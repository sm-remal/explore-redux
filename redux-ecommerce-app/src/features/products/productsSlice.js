import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "./productsApi";
// import AddProduct from "../../components/ProductsList/AddProduct";

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
            status.error = action.error || "Failed to data fetch";
        })

        // Delete Product
        builder.addCase(deleteProduct.fulfilled, (status, action) => {
            status.products = status.products.filter((product) => product.id !== action.payload);
        })

        // Add Product
        builder.addCase(addProduct.fulfilled, (status, action) => {
            status.products.push(action.payload)
        })

        // Update Product
        builder.addCase(updateProduct.fulfilled, (state, action) => {

            const product = state.products.find(
                product => product.id === action.payload.id
            );

            if (product) {
                product.name = action.payload.name;
                product.price = action.payload.price;
                product.stock = action.payload.stock;
                product.stock = action.payload.category;
                product.stock = action.payload.brand;
            }

        });
    }
})

export default productsSlice.reducer