import { productIdParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/Product/getProducts"
import ProductPage from "@/components/Products/ProductPage"
import { ProductParamProps } from "@/types/productProps"

export default async function WomanProductPage({ params }: ProductParamProps) {
  const { id } = await params

  const response = await getProducts(productIdParams(id))
  const product = response.data ? response.data[0] : null

  return (
    <>
      <ProductPage product={product} />
    </>
  )
}
