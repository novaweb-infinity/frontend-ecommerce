import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Product, ProductsState } from "@/types"

const initialState: ProductsState = {
  products: [],
  topSales: [],
  newArrivals: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    setTopSales: (state, action: PayloadAction<Product[]>) => {
      state.topSales = action.payload
    },
    setNewArrivals: (state, action: PayloadAction<Product[]>) => {
      state.newArrivals = action.payload
    },
  },
})

export const { setProducts, setTopSales, setNewArrivals } = productsSlice.actions
export default productsSlice.reducer
