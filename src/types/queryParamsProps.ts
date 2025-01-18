export interface QueryParamsProps {
  filters?: {
    documentId?: { $eq: string }
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
