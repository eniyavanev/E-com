import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [], itemsPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0 }, // Initialize all properties
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Find if the item already exists in the cart
      const exist = state.cart.cartItems.find((x) => x._id === item._id);
      if (exist) {
        // Update the existing item
        state.cart.cartItems = state.cart.cartItems.map((x) =>
          x._id === exist._id ? item : x
        );
      } else {
        // Add the new item to the cart
        state.cart.cartItems = [...state.cart.cartItems, item];
      }

      // Calculate cart total price
      state.cart.itemsPrice = state.cart.cartItems.reduce(
        (a, c) => a + c.price * c.qty,  // Correct accumulation
        0
      );

      // Calculate Shipping Price
      state.cart.shippingPrice = state.cart.itemsPrice > 100 ? 0 : 10;

      // Calculate Tax Price
      state.cart.taxPrice = Number((0.18 * state.cart.itemsPrice).toFixed(2));

      // Calculate Total Price
      state.cart.totalPrice = (
        Number(state.cart.itemsPrice) +
        Number(state.cart.shippingPrice) +
        Number(state.cart.taxPrice)
      ).toFixed(2);

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
