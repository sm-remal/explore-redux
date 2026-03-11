import React, { useState } from "react";
import { useAddProductMutation } from "../../services/productsApi";
import { nanoid } from "@reduxjs/toolkit";

const AddProductForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        image: "",
        description: "",
        rating: {
            rate: "",
            count: "",
        },
    });

    const [addProduct] = useAddProductMutation();
    const handleChange = (e) => {
        const { name, value } = e.target;

        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleRatingChange = (e) => {
        const { name, value } = e.target;

        setProduct({
            ...product,
            rating: {
                ...product.rating,
                [name]: value,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProduct({
                id: nanoid(),
                ...product
            });
            // reset form
            setProduct({
                title: "",
                price: "",
                category: "",
                image: "",
                description: "",
                rating: {
                    rate: "",
                    count: "",
                },
            });
        } catch (error) {
            console.log("Failed to save the product", error);
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Add New Product
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">

                {/* Title */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Product Title</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Mens Cotton Jacket"
                    />
                </div>

                {/* Price */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="55.99"
                    />
                </div>

                {/* Category */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="men's clothing"
                    />
                </div>

                {/* Image */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="https://image-url"
                    />
                </div>

                {/* Rating Rate */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Rating Rate</label>
                    <input
                        type="number"
                        name="rate"
                        value={product.rating.rate}
                        onChange={handleRatingChange}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="4.7"
                    />
                </div>

                {/* Rating Count */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Rating Count</label>
                    <input
                        type="number"
                        name="count"
                        value={product.rating.count}
                        onChange={handleRatingChange}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="500"
                    />
                </div>

                {/* Description full width */}
                <div className="col-span-3 flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        value={product.description}
                        onChange={handleChange}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="Write product description..."
                    />
                </div>

                {/* Button */}
                <div className="col-span-3 flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg shadow"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;