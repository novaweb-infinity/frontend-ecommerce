// Type definitions for the products
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
  orderStatus: null | string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  isFeature: boolean
  productCategory: null | string
  topVentas: boolean
  images: ProductImage[]
}

// Type definitions for the product images
export interface ProductImage {
  id: number
  documentId: string
  name: string
  alternativeText: null | string
  caption: null | string
  width: null | number
  height: null | number
  formats: null | object
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string
  provider: string
  provider_metadata: null | object
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

// Type definitions for the products state
export interface ProductsState {
  products: Product[]
  topSales: Product[]
  newArrivals: Product[]
}

// Base type for any product list
export interface ProductListProps {
  products: Product[]
}

// Type definitions for the new arrivals list
export interface NewArrivalsProps {
  newArrivals: Product[]
}

// Type definitions for the top sales list
export interface TopSalesProps {
  topSales: Product[]
}
