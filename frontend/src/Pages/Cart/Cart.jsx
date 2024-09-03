import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../StateManagement/Slices/cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "../../assets/Images/Empty-cart.png";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const cartItems = cart?.cartItems || [];

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center py-10">
      <div className="w-full max-w-5xl p-6 bg-white shadow-2xl rounded-lg flex flex-col md:flex-row gap-8">
        {/* Left Side: Cart Items */}
        <div className="w-full md:w-2/3 mb-6 md:mb-0 pr-6 border-r border-gray-200 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Your Cart
          </h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="flex flex-col md:flex-row items-center justify-between p-4 mb-4 bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                key={item._id}
              >
                <Link
                  to={`/product/${item._id}`}
                  className="w-full md:w-24 md:h-24"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-200"
                  />
                </Link>
                <div className="flex-1 ml-0 md:ml-6 text-center sm:text-left mt-2 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <b>Price:</b> ₹{item.price}
                  </p>
                  <p className="text-gray-700 font-semibold mt-1">Quantity:</p>
                  {item?.countInStock > 0 && (
                    <select
                      value={item.qty}
                      className="border border-teal-600 py-2 px-4 rounded-md mt-2 mb-4 outline-none cursor-pointer hover:bg-teal-50"
                      onChange={(e) =>
                        dispatch(
                          addToCart({
                            ...item,
                            qty: Number(e.target.value),
                          })
                        )
                      }
                    >
                      {[...Array(item?.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  )}
                  <p
                    className={`text-sm font-semibold ${
                      item?.countInStock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item?.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-4 md:mt-0 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src={EmptyCart}
                alt="Empty Cart"
                className="w-40 mb-4 animate-pulse"
              />
              <p className="text-blue-500 text-lg ">Your cart is empty.</p>
            </div>
          )}
        </div>

        {/* Right Side: Total and Checkout */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Order Summary (
              {cartItems.reduce((acc, item) => acc + item.qty, 0)})
            </h3>
            <div className="flex justify-between mb-3">
              <span className="text-gray-700">Items Price:</span>
              <span className="text-gray-900 font-medium">
                ₹{cart?.itemsPrice}
              </span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-gray-700">Shipping:</span>
              <span className="text-gray-900 font-medium">
                ₹{cart?.shippingPrice}
              </span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-gray-700">Tax Price:</span>
              <span className="text-gray-900 font-medium">
                ₹{cart?.taxPrice}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total:</span>
              <span>₹{cart?.totalPrice}</span>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 ease-in-out">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
