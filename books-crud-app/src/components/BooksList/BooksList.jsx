import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, updateBook } from "../../features/books/bookSlice";

const BooksList = () => {
    const { books } = useSelector(state => state.books);
    const dispatch = useDispatch();

    // States for Update and View
    const [isEditing, setIsEditing] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);
    const [viewBook, setViewBook] = useState(null); // View এর জন্য নতুন স্টেট

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            dispatch(deleteBook(id));
        }
    };

    const openEditModal = (book) => {
        setCurrentBook(book);
        setIsEditing(true);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook(currentBook));
        setIsEditing(false);
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 px-4 relative">
            <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">📚 Book Inventory</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <div key={book.id} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{book.title}</h3>
                            <p className="text-gray-600 text-sm">Author: <span className="font-semibold">{book.author}</span></p>
                            <p className="text-gray-800 font-bold mt-3 text-lg">৳ {book.price}</p>
                        </div>

                        <div className="flex gap-2 mt-6">
                            {/* --- View Button --- */}
                            <button
                                onClick={() => setViewBook(book)}
                                className="px-3 py-2 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
                            >
                                View
                            </button>
                            <button
                                onClick={() => openEditModal(book)}
                                className="flex-1 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-200 transition-colors text-sm"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(book.id)}
                                className="flex-1 py-2 bg-red-50 text-red-600 font-semibold rounded-xl hover:bg-red-100 transition-colors text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- 📝 EDIT MODAL UI --- */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">✏️ Edit Book Info</h3>
                        
                        <form onSubmit={handleUpdateSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
                                <input
                                    type="text"
                                    value={currentBook.title}
                                    onChange={(e) => setCurrentBook({...currentBook, title: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price (৳)</label>
                                <input
                                    type="number"
                                    value={currentBook.price}
                                    onChange={(e) => setCurrentBook({...currentBook, price: Number(e.target.value)})}
                                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-colors"
                                >
                                    Update Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* --- 🔍 VIEW DETAILS MODAL --- */}
            {viewBook && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                📖
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{viewBook.title}</h3>
                            <p className="text-gray-500 mb-6 font-medium">by {viewBook.author}</p>
                        </div>
                        
                        <div className="space-y-3 border-t border-b py-4 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Category:</span>
                                <span className="font-semibold text-gray-800">{viewBook.category}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Price:</span>
                                <span className="font-bold text-gray-900">৳ {viewBook.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Stock Status:</span>
                                <span className={`font-bold ${viewBook.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                    {viewBook.inStock ? "Available" : "Out of Stock"}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setViewBook(null)}
                            className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            Close Details
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BooksList;