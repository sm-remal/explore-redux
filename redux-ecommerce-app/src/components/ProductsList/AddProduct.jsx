import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/products/productsApi';

const AddProduct = () => {

    const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    id: '',
    name: '',
    brand: '',
    category: '',
    price: '',
    rating: '',
    stock: '',
    isAvailable: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: formData.id,
      name: formData.name,
      brand: formData.brand,
      category: formData.category,
      price: Number(formData.price),
      rating: Number(formData.rating),
      stock: Number(formData.stock),
      isAvailable: formData.isAvailable
    };

    dispatch(addProduct(newProduct))

    alert("Product add successfully");

    setFormData({
      id: '', name: '', brand: '', category: '', price: '', rating: '', stock: '', isAvailable: true
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10 font-sans border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Product</h2>
      
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="id" className="block mb-2 font-semibold text-gray-700">Product ID</label>
          <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} placeholder="e.g., 7" required 
                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Product Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Mi Smart Watch" required 
                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="brand" className="block mb-2 font-semibold text-gray-700">Brand</label>
          <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} placeholder="e.g., Xiaomi" required 
                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-semibold text-gray-700">Category</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} placeholder="e.g., Smartwatch" required 
                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-semibold text-gray-700">Price</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="e.g., 8000" required 
                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2 font-semibold text-gray-700">Rating (0 - 5)</label>
          <input type="number" id="rating" name="rating" step="0.1" min="0" max="5" value={formData.rating} onChange={handleChange} placeholder="e.g., 4.3" required 
                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="stock" className="block mb-2 font-semibold text-gray-700">Stock Quantity</label>
          <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} placeholder="e.g., 30" required 
                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <div className="flex items-center mb-6 mt-2">
          <input type="checkbox" id="isAvailable" name="isAvailable" checked={formData.isAvailable} onChange={handleChange} 
                 className="w-5 h-5 mr-3 text-green-600 border-gray-300 rounded focus:ring-green-500 cursor-pointer" />
          <label htmlFor="isAvailable" className="font-semibold text-gray-700 cursor-pointer">Is Available In Stock?</label>
        </div>

        <button type="submit" 
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 mt-2 shadow-sm">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;