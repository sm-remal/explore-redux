import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer