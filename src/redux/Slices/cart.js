// cartSlice.js (or your Redux slice file)

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // An array to store the products in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product to the cart
    add: (state, action) => {
      const { name, imageurl, quantity, size, price, id } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id && item.size === size);

      if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.price += price;
      } else {
        
        state.items.push({ id, name, imageurl, quantity, size, price });
      }
    },

    // Remove a product from the cart
    remove: (state, action) => {
      const { id, size } = action.payload;
      const index = state.items.findIndex((item) => item.id === id && item.size === size);

      if (index !== -1) {
       
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          
          state.items.splice(index, 1);
        }
      }
    },
    //Delete a product from the cart
    removePermanent: (state, action) => {
      const { id } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },
  },
});

export const { add, remove , removePermanent} = cartSlice.actions;

export default cartSlice.reducer;
