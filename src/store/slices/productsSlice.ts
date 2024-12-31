import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Product, ProductsState } from "@/types"

const initialState: ProductsState = {
  products: [],
  topSales: [],
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
  },
})

export const { setProducts, setTopSales } = productsSlice.actions
export default productsSlice.reducer
