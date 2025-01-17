export interface QueryParamsProps {
  filters?: {
    isFavorite?: { $eq: boolean }
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
