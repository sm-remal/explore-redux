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
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, price, category, inStock } = action.payload
      const existingBook = state.books.find(book => book.id === id);
      if (existingBook) {
        existingBook.title = title; 
        existingBook.author = author;
        existingBook.price = price;
        existingBook.category = category;
        existingBook.inStock = inStock;
      }
    },
  }
})

export const { deleteBook, addBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;