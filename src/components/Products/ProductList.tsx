import { Pagination } from "@/lib/pagination"

import AllProducts from "./AllProducts"
import PaginationControls from "./PaginationController"

export default async function ProductList({ currentPage, pageSize }: { currentPage: number; pageSize: number }) {
  const { data: products, meta } = await Pagination(currentPage, pageSize)
  const totalPages = Math.ceil(meta.pagination.total / pageSize)

  return (
    <>
      <AllProducts products={products} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={meta.pagination.total}
        pageSize={pageSize}
      />
    </>
  )
}
