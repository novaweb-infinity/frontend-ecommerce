import { Suspense } from "react"

import AllProductsList from "@/components/Products/AllProductsList"
import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"

interface PageProps {
  searchParams: Promise<{
    page?: string | string[]
  }>
}

export default async function Products({ searchParams }: PageProps) {
  const params = await searchParams

  const currentPage = Number(params.page) || 1
  const pageSize = 12

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Todos los productos</h2>
      <Suspense fallback={<ProductListSkeleton />}>
        <AllProductsList currentPage={currentPage} pageSize={pageSize} />
      </Suspense>
    </section>
  )
}
