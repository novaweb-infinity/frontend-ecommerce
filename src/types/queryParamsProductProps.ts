export interface QueryParamsProductProps {
  filters?: {
    isFeature?: { $eq: boolean }
    topVentas?: { $eq: boolean }
  }
  category?: string
  pagination?: {
    limit?: number
    page?: number
    pageSize?: number
  }
  populate?: string
}
