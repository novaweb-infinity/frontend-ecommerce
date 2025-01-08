import { ProductProps } from "./productProps"

export interface ApiResponseProps {
  data?: ProductProps[]
  meta?: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
