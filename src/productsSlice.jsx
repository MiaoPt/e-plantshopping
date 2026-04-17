import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id:1,  
      img: "https://images.unsplash.com/photo-1687645652864-fb57e8555d8b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Potato",
      cost: 5,
      quantity: 0,
      category: 'food',
    },
    {
      id:2,  
      img: "https://images.unsplash.com/photo-1597338684959-a73136a8be13?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tomato",
      cost: 2,
      quantity: 0,
      category: 'food',
    },
    {
      id:3,  
      img: "https://images.unsplash.com/photo-1575011016054-f3f0f3d4b7bb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "chilli",
      cost: 3,
      quantity: 0,
      category: 'food',
    },
    {
      id:4,  
      img: "https://images.unsplash.com/photo-1560951812-58e6bce53149?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "aubergine",
      cost: 5,
      quantity: 0,
      category: 'food',
    },
    {
      id:5,  
      img: "https://media.istockphoto.com/id/137215894/photo/chive-flowers.jpg?s=2048x2048&w=is&k=20&c=G2Bsle7fJPiZSCbC-86eRDOclDsauxHMIGKZ3pWeTTk=",
      name: "chives",
      cost: 5,
      quantity: 0,
      category: 'food',
    },
    {
      id:6,  
      img: "https://images.unsplash.com/photo-1714425396242-915d4093800a?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "onions",
      cost: 1,
      quantity: 0,
      category: 'food',
    },
  ],

  reducers: {
    addItem: (state, action) => {
        const { payload: id } = action;
        if (state.find(item => item.id === id)) {
            state[id].quantity++;
        }
    },
   removeItem: (state, action) => {
        const { payload: id } = action;
        if (state.find(item => item.id === id).quantity>0) {
            state[id].quantity--;
        }
    },

    //need to work on 
    updateQuantity:(state, action) => {
        const { payload: id } = action;
        if (state.find(item => item.id === id)) {
            state[id].quantity--;
        }
    },
   
  },
});

export const { addItem, removeItem, updateQuantity } = productsSlice.actions;

export default productsSlice.reducer;