import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../../Components/Rating/Rating";
import { FaHome } from "react-icons/fa";
import { useGetProductByIdQuery } from "../../StateManagement/Slices/productSlice";

const productsProduct = () => {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(id);

  const products = product?.product;

  return (
    <div className="container mx-auto bg-gradient-to-r font-serif from-teal-400 to-emerald-300 min-h-screen p-6 flex flex-col items-center">
      <Link to="/" className="self-start">
        <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mb-6 flex items-center gap-2">
          <FaHome /> Back to Home
        </button>
      </Link>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-teal-900">
        Product Details
      </h1>
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg w-full  max-w-5xl">
        <img
          src={products?.image}
          alt={products?.name}
          className="w-full h-full md:w-1/2 rounded-lg shadow-lg object-cover mb-6 md:mb-0"
        />
        <div className="md:ml-10 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">
            {products?.name}
          </h1>
          <p className="text-gray-600 mb-4">{products?.description}</p>
          <p className="text-lg font-semibold mb-4 text-teal-800">
            Category: {products?.category}
          </p>
          <div className="mb-4 flex justify-center md:justify-start">
            <Rating
              value={products?.rating}
              text={`${products?.numReviews} reviews`}
            />
          </div>
          <p className="text-lg font-semibold mb-4 text-teal-800">
            Brand: {products?.brand}
          </p>
          <p className="text-2xl font-bold mb-4 text-teal-900">
            Price: ${products?.price}
          </p>
          <p
            className={`text-lg font-semibold mb-6 ${
              products?.countInStock > 0 ? "text-green-700" : "text-red-600"
            }`}
          >
            {products?.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default productsProduct;
