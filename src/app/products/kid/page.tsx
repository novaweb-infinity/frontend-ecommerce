import { kidsProductsParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/getProducts"
import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"
import ProductsList from "@/components/Products/ProductsList"

export default async function KidsProducts() {
  const { data: products } = await getProducts(kidsProductsParams)

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Niños</h2>
      {products?.length === 0 ? <ProductListSkeleton /> : <ProductsList products={products || []} />}
    </section>
  )
}
