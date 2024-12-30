import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ProductsState {
  products: Product[]
}

export interface Product {
  id: number
  documentId: string
  productName: string
  slug: string
  description: string
  active: boolean
  price: number
  stock: number
  availability: string
  orderStatus: null
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  isFeature: boolean
  productCategory: null
  topVentas: boolean
  images: Image[]
}

export interface Image {
  id: number
  documentId: string
  name: string
  alternativeText: null
  caption: null
  width: null
  height: null
  formats: null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

const initialState: ProductsState = {
  products: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
  },
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
