import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ProductProps, ProductsStateProps } from "@/types/productProps"

const initialState: ProductsStateProps = {
  products: [],
  topSales: [],
  newArrivals: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductProps[]>) => {
      state.products = action.payload
    },
    setTopSales: (state, action: PayloadAction<ProductProps[]>) => {
      state.topSales = action.payload
    },
    setNewArrivals: (state, action: PayloadAction<ProductProps[]>) => {
      state.newArrivals = action.payload
    },
  },
})

export const { setProducts, setTopSales, setNewArrivals } = productsSlice.actions
export default productsSlice.reducer
