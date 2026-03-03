import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// export const BASE_URL = "http://localhost:5000/products";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
} )