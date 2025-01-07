import { JSX, Suspense } from "react"

import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"
import ProductsList from "@/components/Products/ProductsList"

export default function WomanProducts(): JSX.Element {
  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-3xl font-bold">Hombres</h2>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductsList />
        </Suspense>
      </section>
    </>
  )
}
