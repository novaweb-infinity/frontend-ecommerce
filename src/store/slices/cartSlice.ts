import { createSlice } from "@reduxjs/toolkit"

import { ProductsStateProps } from "@/types/productProps"

const initialState: ProductsStateProps = {
  items: [],
}

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      console.log(state.items)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export default cartReducer.reducer
export const { addItem, removeItem, clearCart } = cartReducer.actions
