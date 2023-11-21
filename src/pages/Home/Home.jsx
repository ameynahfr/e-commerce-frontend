import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const HomePage = () => {
  return (
    <div className="banner relative bg-cover bg-center h-screen flex items-center">
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-white z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Welcome to Signify
        </h1>
        <p className="text-lg md:text-xl mb-8">
          "Unveil Your Essence, Evoke Your Signature Scent."
        </p>
        <p className="text-lg md:text-xl mb-8">
          Discover the latest products and shop with confidence.
        </p>

        <Link
          to="/products"
          className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded-full font-semibold text-lg md:text-xl transition duration-300"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
