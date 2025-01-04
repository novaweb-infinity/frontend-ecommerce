import { getProducts } from "@/api/services/getProducts"
import { QueryParamsProps } from "@/types/"

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
