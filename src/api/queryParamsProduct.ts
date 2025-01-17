import { QueryParamsProps } from "@/types/"

export const newArrivalsParams: QueryParamsProps = {
  filters: {
    isFeature: { $eq: true },
  },
  pagination: {
    limit: 8,
  },
  populate: "images",
}

export const topSalesParams: QueryParamsProps = {
  filters: {
    topVentas: { $eq: true },
  },
  pagination: {
    limit: 3,
  },
  populate: "images",
}

export const kidsProductsParams: QueryParamsProps = {
  filters: {
    productCategory: "Niño",
  },
  populate: "images",
}

export const menProductsParams: QueryParamsProps = {
  filters: {
    productCategory: "Hombre",
  },
  populate: "images",
}

export const womenProductsParams: QueryParamsProps = {
  filters: {
    productCategory: "Mujer",
  },
  populate: "images",
}
