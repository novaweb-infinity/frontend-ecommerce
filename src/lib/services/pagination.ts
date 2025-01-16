import { getProducts } from "@/api/services/Product/getProducts"
import { QueryParamsProductProps } from "@/types/queryParamsProductProps"

export async function Pagination(page: number, pageSize: number) {
  const queryParams: QueryParamsProductProps = {
    pagination: {
      page,
      pageSize,
    },
    populate: "images",
  }

  const response = await getProducts(queryParams)
  return response
}
