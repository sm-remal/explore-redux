import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// export const BASE_URL = "http://localhost:5000/products";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
} )

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    const response = await axios.delete(`http://localhost:5000/products/${id}`);
    console.log(response);
    return id;
})

export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    const response = await axios.post(`http://localhost:5000/products`, product);
    return response;
})

export const updateProduct = createAsyncThunk("products/updateProduct", async (id) => {
    const response = await axios.post(`http://localhost:5000/products/${id}`);
    console.log(response);
    return id;
})