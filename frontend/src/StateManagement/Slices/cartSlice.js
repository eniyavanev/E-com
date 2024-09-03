import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [] }, // Correctly initializes cart as an object
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log(item);
      //console.log("Cart", state.cart);

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

      //Calculate cart total
      state.cart.itemsPrice = state.cart.cartItems.reduce(
        (a, c) => c.price * c.qty,
        0
      );

      //Shipping Price
      state.cart.shippingPrice = state.cart.itemsPrice > 100 ? 0 : 10;

      //tax price
      state.cart.taxPrice = (0.18 * state.cart.itemsPrice).toFixed(2);

      //TotalProce
      state.cart.totalPrice = (
        parseFloat(state.cart.itemsPrice) +
        parseFloat(state.cart.shippingPrice) +
        parseFloat(state.cart.taxPrice)
      ).toFixed(2);
      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      state.users = state.cart.cartItems.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },  
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
