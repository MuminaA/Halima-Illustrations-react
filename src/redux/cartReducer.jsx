import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // cart starts empty
    products: []
  },

  reducers: {
    addToCart: (state, action) => {
        // find if item is already in the cart if it is then increace the quantity
        // else add item into the cart
      const item = state.products.find(item => item.id === action.payload.id)

      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },
    removeItem: (state, action) => {
        // delete item
      state.products = state.products.filter(item => item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
    // closeCart: () {
      
    // }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer