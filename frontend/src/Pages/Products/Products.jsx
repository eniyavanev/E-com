import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../Components/Rating/Rating";

const Products = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="block">
      <div className="card w-full bg-gradient-to-br from-white via-gray-100 to-teal-100 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 font-serif">
        <figure className="relative w-full h-60 md:h-64 overflow-hidden">
          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            {product.category}
          </div>
        </figure>
        <div className="card-body p-6 text-center">
          <h2 className="card-title text-2xl font-bold text-teal-900 mb-3">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4 flex justify-center">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
          <p className="text-xl font-semibold text-teal-800 mb-4">
            {`Price: $${product.price.toFixed(2)}`}
          </p>

          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Products;
