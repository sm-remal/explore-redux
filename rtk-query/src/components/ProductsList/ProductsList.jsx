import React, { useState } from "react";
import { useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from "../../services/productsApi";

const ProductsList = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  // Test for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteProduct(id);
    }
  };

  // When click edit button, Open the modal
  const handleEditClick = (product) => {
    setEditData(product);
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        id: editData.id,
        updatedProduct: editData
      }).unwrap();
      setIsModalOpen(false); // Model off when update successful
      alert("Product updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (isLoading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-5 border">
            <img src={product.image} alt="" className="h-40 mx-auto object-contain" />
            <h2 className="font-semibold mt-4 line-clamp-1">{product.title}</h2>
            <p className="text-blue-600 font-bold">${product.price}</p>
            
            <div className="flex gap-2 mt-4">
              <button 
                onClick={() => handleEditClick(product)}
                className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(product.id)}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL SECTION --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input 
                  type="text" 
                  value={editData.title}
                  onChange={(e) => setEditData({...editData, title: e.target.value})}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Price</label>
                <input 
                  type="number" 
                  value={editData.price}
                  onChange={(e) => setEditData({...editData, price: Number(e.target.value)})}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea 
                  value={editData.description}
                  onChange={(e) => setEditData({...editData, description: e.target.value})}
                  className="w-full border p-2 rounded"
                  rows="3"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Rate</label>
                  <input 
                    type="number" 
                    value={editData.rating?.rate}
                    onChange={(e) => setEditData({
                      ...editData, 
                      rating: { ...editData.rating, rate: Number(e.target.value) }
                    })}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Count</label>
                  <input 
                    type="number" 
                    value={editData.rating?.count}
                    onChange={(e) => setEditData({
                      ...editData, 
                      rating: { ...editData.rating, count: Number(e.target.value) }
                    })}
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;