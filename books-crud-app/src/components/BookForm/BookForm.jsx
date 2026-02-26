import React, { useState } from 'react';

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        price: '',
        inStock: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // replace with your addBook logic
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 text-center">
                ➕ Add New Book
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-3">
                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Book title"
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                placeholder="Author name"
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Category"
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">
                                Price (৳)
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleChange}
                        className="w-4 h-4 accent-blue-600 rounded"
                    />
                    <label className="text-gray-700 text-sm font-medium">
                        In Stock
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow transition-all duration-200 text-sm cursor-pointer"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default BookForm;