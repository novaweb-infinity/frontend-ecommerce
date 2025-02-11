import { JSX } from "react"

import { menProductsParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/Product/getProducts"
import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"
import ProductsList from "@/components/Products/ProductsList"

export default async function MenProducts(): Promise<JSX.Element> {
  const { data: products } = await getProducts(menProductsParams)

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mt-40 xl:mt-20">
        <h2 className="mb-6 text-3xl font-bold">Hombre</h2>
        {products?.length === 0 ? <ProductListSkeleton /> : <ProductsList products={products || []} />}
      </div>
    </section>
  )
}
