import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ProductProps, ProductsStateProps } from "@/types/productProps"

const initialState: ProductsStateProps = {
  items: [],
}

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductProps>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
    setItem: (state, action) => {
      state.items = action.payload
    },
  },
})

export default cartReducer.reducer
export const { addItem, removeItem, clearCart } = cartReducer.actions
