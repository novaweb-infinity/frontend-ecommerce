import { Pagination } from "@/lib/pagination"

import PaginationControls from "./PaginationController"
import ProductsGrid from "./ProductsGrid"

export default async function AllProductsList({ currentPage, pageSize }: { currentPage: number; pageSize: number }) {
  const { data: products, meta } = await Pagination(currentPage, pageSize)
  const totalPages = Math.ceil(meta.pagination.total / pageSize)

  return (
    <>
      <ProductsGrid products={products} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={meta.pagination.total}
        pageSize={pageSize}
      />
    </>
  )
}
