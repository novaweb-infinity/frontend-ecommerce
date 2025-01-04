import { Product } from "./productProps"

export interface ApiResponseProps {
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
