import { Suspense } from "react"

import ProductList from "./PoductList"
import { ProductListSkeleton } from "./ProductSkeleton"

interface SearchParams {
  searchParams: {
    page?: string
  }
}

export default function Products({ searchParams }: SearchParams) {
  const currentPage = Number(searchParams.page) || 1
  const pageSize = 12

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Todos los productos</h2>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList currentPage={currentPage} pageSize={pageSize} />
      </Suspense>
    </section>
  )
}
