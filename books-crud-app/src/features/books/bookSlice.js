import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 450,
      category: "Self Development",
      inStock: true,
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 400,
      category: "Finance",
      inStock: true,
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 350,
      category: "Fiction",
      inStock: false,
    },
  ],
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        
    }
})