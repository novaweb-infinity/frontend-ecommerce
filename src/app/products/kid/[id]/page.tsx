import { productIdParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/Product/getProducts"
import ProductPage from "@/components/Products/ProductPage"
import { ProductParamProps } from "@/types/productProps"

export default async function KidProductPage({ params }: ProductParamProps) {
  const { id } = await params

  const response = await getProducts(productIdParams(id.toString()))
  const product = response.data ? response.data[0] : null

  return (
    <>
      <ProductPage product={product} />
    </>
  )
}
