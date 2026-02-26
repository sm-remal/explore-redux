import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from "../../features/books/bookSlice";

const BooksList = () => {
    const { books } = useSelector(state => state.books);
    const dispatch = useDispatch();

    console.log(books, dispatch)
    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 px-4">
            <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-tight">
                📚 Book List
            </h2>

            {books.length === 0 ? (
                <div className="text-center text-gray-400 text-lg italic">
                    No books available
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-8">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {book.title}
                                </h3>

                                <p className="text-gray-600">
                                    <span className="font-medium">Author:</span> {book.author}
                                </p>

                                <p className="text-gray-600">
                                    <span className="font-medium">Category:</span> {book.category}
                                </p>

                                <p className="text-gray-800 font-bold text-lg">
                                    ৳ {book.price}
                                </p>

                                <p
                                    className={`font-semibold ${book.inStock ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {book.inStock ? "In Stock" : "Out of Stock"}
                                </p>
                            </div>

                            <div className="flex justify-end gap-4 mt-6">
                                <button className="px-5 py-2 text-sm bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-md transition-all duration-200">
                                    Toggle Stock
                                </button>

                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className="px-5 py-2 text-sm bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 shadow-md transition-all duration-200 cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BooksList;