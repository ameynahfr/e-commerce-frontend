import React, { useEffect, useState } from "react";
import axios from "axios";
import productImage from "../../src/productImage.jpeg";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Number of products to display per page

  useEffect(() => {
    // Fetch data from the API with pagination parameters
    axios
      .get(
        `http://localhost:4500/api/product/all-products?page=${currentPage}&limit=${productsPerPage}`
      )
      .then((response) => {
        setProducts(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [currentPage, productsPerPage]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow-md">
            {product.images && product.images.length > 0 && (
              <img
                src={productImage}
                alt={product.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
            )}
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
            <div className="mt-4">
              <span className="text-gray-600">Rating: {product.rating}</span>
              <span className="ml-2 text-gray-600">
                Reviews: {product.numberOfReviews}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 px-4 py-2 rounded-l-md"
        >
          Previous
        </button>
        <span className="mx-4">Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-gray-300 px-4 py-2 rounded-r-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
