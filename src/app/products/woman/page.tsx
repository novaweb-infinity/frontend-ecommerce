import { JSX } from "react"

import { womenProductsParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/Product/getProducts"
import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"
import ProductsList from "@/components/Products/ProductsList"

export const dynamic = "force-dynamic" // Esto es para que la página se renderice en el servidor
export default async function WomanProducts(): Promise<JSX.Element> {
  const { data: products } = await getProducts(womenProductsParams)

  if (!products) return <ProductListSkeleton />

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mt-40 xl:mt-20">
        <h2 className="mb-6 text-3xl font-bold">Mujer</h2>
        {products?.length === 0 ? <ProductListSkeleton /> : <ProductsList products={products || []} />}
      </div>
    </section>
  )
}
