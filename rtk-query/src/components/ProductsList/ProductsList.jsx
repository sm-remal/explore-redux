import React from "react";
import { useDeleteProductMutation, useGetProductsQuery } from "../../services/productsApi";

const ProductsList = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  const [ deleteProduct ] = useDeleteProductMutation()

const handleDelete = async (id) => {
    await deleteProduct(id)
}

  if (isLoading) { 
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error?.message || "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            
            <div className="bg-gray-100 flex justify-center p-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-5 space-y-3">
              <h2 className="font-semibold text-lg line-clamp-2">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xl font-bold text-blue-600">
                  ${product.price}
                </span>

                <span className="text-yellow-500 text-sm">
                  ⭐ {product?.rating?.rate}
                </span>
              </div>

              <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button 
              type="button"
              onClick={() => handleDelete(product.id)}
              className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList; 