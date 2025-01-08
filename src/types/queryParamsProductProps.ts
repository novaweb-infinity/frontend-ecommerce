export interface QueryParamsProductProps {
  filters?: {
    isFeature?: { $eq: boolean }
    topVentas?: { $eq: boolean }
    productCategory?: string
  }
  pagination?: {
    limit?: number
    page?: number
    pageSize?: number
  }
  populate?: string
}
