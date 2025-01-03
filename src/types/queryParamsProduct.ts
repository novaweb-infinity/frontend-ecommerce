export interface QueryParamsProps {
  filters?: {
    isFeature?: { $eq: boolean }
    topVentas?: { $eq: boolean }
  }
  pagination?: {
    limit: number
  }
  populate?: string
}
