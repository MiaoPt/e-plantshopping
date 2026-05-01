import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCost: 0
  },

  reducers: {

    addItem:(state, action) => {
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        
        if (existingItem) {
          existingItem.quantity ++;
        } else {
          state.items.push({...newItem, quantity:1})
        }
        state.totalQuantity++;
        state.totalCost += newItem.cost
        },

      increaseQuantity: (state, action) => {
        
        const itemToIncrease = state.items.find(item => item.id === action.payload.id)   
        itemToIncrease.quantity++;
        state.totalQuantity++;
        state.totalCost += itemToIncrease.cost;

      },
      decreaseQuantity: (state, action) => {
          const itemToDecrease = state.items.find(item => item.id === action.payload.id)
          if (itemToDecrease.quantity > 1) {
            itemToDecrease.quantity--;
            state.totalQuantity--;
            state.totalCost -= itemToDecrease.cost;
          }
          },
      removeItem: (state, action) => {
          const itemToRemove = state.items.find(item => item.id === action.payload)
      
          if (itemToRemove) {
            state.totalQuantity -= itemToRemove.quantity;
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalCost -= itemToRemove.cost * itemToRemove.quantity;
          }
      },
  }
      

});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
