import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const cartItems = cart?.cartItems || [];
  const { shippingPrice, totalPrice, taxPrice } = cart; // Access shippingPrice and totalPrice directly from the state

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-md flex">
      {/* Left Side: Cart Items */}
      <div className="w-2/3 pr-6 border-r border-gray-200 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-md shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Right Side: Total and Checkout */}
      <div className="w-1/3 pl-6">
        <div className="sticky top-4">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">ItemsPrice:</span>
            <span className="text-gray-900">₹{cart.itemsPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Shipping:</span>
            <span className="text-gray-900">₹{shippingPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">TaxPrice:</span>
            <span className="text-gray-900">₹{taxPrice.toFixed(2)}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
