import { Product } from "./products"

export interface ApiResponse {
  data: Product[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
