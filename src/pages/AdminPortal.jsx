import React, { useState } from "react";
import axios from "axios";

const AdminPortal = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    inventory: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleAddProduct = () => {
    const data = new FormData();
    for (const key in formData) {
      if (key === "images") {
        formData.images.forEach((image, index) => {
          data.append(`images[${index}]`, image);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:4500/api/product/register-product", data, config)
      .then((response) => {
        console.log("Product added successfully:", response.data);
        // Clear the form after adding a new product
        setFormData({
          title: "",
          description: "",
          price: "",
          category: "",
          inventory: "",
          images: [],
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Admin Portal</h1>
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Product Title"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Product Description"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Product Price"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Product Category"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inventory" className="block text-gray-700 font-bold">
            Inventory
          </label>
          <input
            type="text"
            id="inventory"
            name="inventory"
            value={formData.inventory}
            onChange={handleInputChange}
            placeholder="Product Inventory"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="images"
            multiple
            onChange={handleImageChange}
            className="p-2"
          />
        </div>
        <button
          type="button"
          onClick={handleAddProduct}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminPortal;
