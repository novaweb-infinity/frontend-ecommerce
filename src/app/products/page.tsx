import { JSX, Suspense } from "react"

import AllProductsList from "@/components/Products/AllProductsList"
import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"
import { Pagination } from "@/lib//services/pagination"

interface PageProps {
  searchParams: Promise<{
    page?: string | string[]
  }>
}

export default async function Products({ searchParams }: PageProps): Promise<JSX.Element> {
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const pageSize = 12

  const { data: products, meta } = await Pagination(currentPage, pageSize)
  const totalPages = meta ? Math.ceil(meta.pagination.total / pageSize) : 0

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 mt-40 text-3xl font-bold xl:mt-20">Todos los productos</h2>
      <Suspense fallback={<ProductListSkeleton />}>
        <AllProductsList
          currentPage={currentPage}
          pageSize={pageSize}
          products={products || []}
          totalPages={totalPages}
          meta={meta || { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } }}
        />
      </Suspense>
    </section>
  )
}
