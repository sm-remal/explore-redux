import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProducts, updateProduct } from '../../features/products/productsApi';

const ProductsList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    console.log(selectedProduct)

    const { products, isLoading, isError, error } = useSelector(state => state.products);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    // Delete Product
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    // Update Product
    const handleUpdate = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
        name: e.target[0].value,
        price: Number(e.target[1].value),
        stock: Number(e.target[2].value),
    };

    dispatch(updateProduct({
        id: selectedProduct.id,
        product: updatedData
    }));

    setIsModalOpen(false);
};



    if (isLoading) {
        return <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-500 font-medium tracking-wide">Loading premium collection...</p>
            </div>
        </div>
    }
    if (!isLoading && isError) {
        return <div className="max-w-lg mx-auto mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-md shadow-sm">
            <h3 className="text-red-800 font-semibold text-lg flex items-center">
                <span className="mr-2">⚠️</span> Oops, something went wrong
            </h3>
            <p className="text-red-600 mt-2">{error}</p>
        </div>
    }
    if (!isLoading && products.length === 0) {
        return (<div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-xl border border-dashed border-gray-300 mx-4">
            <span className="text-4xl mb-3">📭</span>
            <p className="text-gray-500 text-lg font-medium">No products available right now.</p>
            <p className="text-gray-400 text-sm mt-1">Check back later for new arrivals.</p>
        </div>)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
                    Featured Products
                </h2>
                <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products?.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group"
                    >
                        {/* Status Badge */}
                        <div className="p-4 flex justify-between items-center bg-gray-50 border-b border-gray-100">
                            <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${product.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {product.isAvailable ? 'In Stock' : 'Out of Stock'}
                            </span>
                            <span className="flex items-center text-sm font-medium text-amber-500">
                                ⭐ {product.rating}
                            </span>
                        </div>

                        {/* Product Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            <span className="text-sm font-semibold text-indigo-600 mb-1 tracking-wide uppercase">
                                {product.brand}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4 bg-gray-100 w-max px-2 py-1 rounded">
                                {product.category}
                            </p>

                            <div className="mt-auto flex items-end justify-between">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Price</p>
                                    <p className="text-2xl font-black text-gray-900">
                                        ৳{product.price.toLocaleString()}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 mb-1">Stock</p>
                                    <p className="text-sm font-bold text-gray-700">
                                        {product.stock} left
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <button
                            disabled={!product.isAvailable}
                            className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${product.isAvailable
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {product.isAvailable ? 'Add to Cart' : 'Unavailable'}
                        </button>

                        {/* Delete Button  */}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>

                        {/* Update Button*/}
                        <button onClick={() => handleUpdate(product)}>Update</button>
                    </div>
                ))}
            </div>

            {
                isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white rounded-xl w-[400px] p-6 shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Update Product</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    defaultValue={selectedProduct?.name}
                                    className="w-full border p-2 rounded"
                                    placeholder="Product Name"
                                />
                                <input
                                    type="text"
                                    defaultValue={selectedProduct?.category}
                                    className="w-full border p-2 rounded"
                                    placeholder="Product Name"
                                />
                                <input
                                    type="text"
                                    defaultValue={selectedProduct?.brand}
                                    className="w-full border p-2 rounded"
                                    placeholder="Product Name"
                                />
                                <input
                                    type="number"
                                    defaultValue={selectedProduct?.price}
                                    className="w-full border p-2 rounded"
                                    placeholder="Price"
                                />
                                <input
                                    type="number"
                                    defaultValue={selectedProduct?.stock}
                                    className="w-full border p-2 rounded"
                                    placeholder="Stock"
                                />
                                <div className="flex justify-end gap-3 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 bg-gray-200 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        // {() => handleUpdate()}
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default ProductsList;