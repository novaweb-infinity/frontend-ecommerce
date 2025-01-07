import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getProducts } from "@/api/services/getProducts"
import { ProductProps, ProductsStateProps } from "@/types/productProps"

interface Meta {
  pagination: {
    total: number
  }
}

const initialState: ProductsStateProps = {
  products: [],
  topSales: [],
  newArrivals: [],

  meta: {
    pagination: {
      total: 0,
    },
  },
}

export const fetchProducts = createAsyncThunk<{ data: ProductProps[]; meta: Meta }, void, { rejectValue: any }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts({ populate: "images" })
      const { data, meta } = response

      return { data, meta }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.data as ProductProps[]
      state.meta = action.payload.meta
    })
  },
})

export default productReducer.reducer
