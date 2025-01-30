import { getProducts } from "@/api/services/Product/getProducts"
import { QueryParamsProps } from "@/types/queryParamsProps"

export async function Pagination(page: number, pageSize: number) {
  const queryParams: QueryParamsProps = {
    pagination: {
      page,
      pageSize,
    },
    populate: "images",
  }

  const response = await getProducts(queryParams)
  return response
}
