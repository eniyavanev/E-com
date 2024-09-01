import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../../Components/Rating/Rating";
import { FaHome } from "react-icons/fa";
import { useGetProductByIdQuery } from "../../StateManagement/Slices/productSlice";
import { addToCart } from "../../StateManagement/Slices/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const productsProduct = () => {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(id);

  const products = product?.product;
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart({ ...products, qty }));
    toast.success("Product added to cart.", {
      style: {
        border: "1px solid #0000ff",
        padding: "16px",
        color: "#52327a",
      },
      iconTheme: {
        primary: "#0000ff",
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-teal-400 to-blue-300 min-h-screen p-8 flex flex-col items-center">
      <Link to="/" className="self-start mb-6">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full mb-4 shadow-md flex items-center gap-2 transition duration-200">
          <FaHome /> Back to Home
        </button>
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-center text-teal-900">
        Product Details
      </h1>

      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-xl shadow-2xl w-full max-w-5xl gap-8">
        <img
          src={products?.image}
          alt={products?.name}
          className="w-full h-[400px] md:w-1/2 rounded-xl shadow-lg object-cover mb-6 md:mb-0"
        />
        <div className="flex flex-col items-center md:items-start md:ml-8">
          <h1 className="text-3xl font-extrabold mb-4 text-teal-800">
            {products?.name}
          </h1>
          <p className="text-gray-700 text-base mb-4">
            {products?.description}
          </p>
          <p className="text-lg font-medium mb-4 text-teal-700">
            Category: {products?.category}
          </p>
          <div className="mb-4 flex justify-center md:justify-start">
            <Rating
              value={products?.rating}
              text={`${products?.numReviews} reviews`}
            />
          </div>
          <p className="text-lg font-medium mb-4 text-teal-700">
            Brand: {products?.brand}
          </p>
          <p className="text-2xl font-bold mb-4 text-teal-900">
            Price: ${products?.price}
          </p>

          {products?.countInStock > 0 && (
            <select
              onChange={(e) => setQty(Number(e.target.value))}
              className="border border-teal-600 py-2 px-4 rounded-md mb-4 outline-none cursor-pointer hover:bg-teal-50"
            >
              {[...Array(products?.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          )}

          <p
            className={`text-lg font-semibold mb-6 ${
              products?.countInStock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {products?.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <button
            onClick={addProductToCart}
            className={`bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ${
              products?.countInStock === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={products?.countInStock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default productsProduct;
