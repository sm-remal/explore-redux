import { createSlice } from '@reduxjs/toolkit'

export const products = {
    products: [],
    initialState: {},

}

const productsSlice = createSlice({
    name: "products",
    initialState: ''

})

export default productsSlice.reducer;