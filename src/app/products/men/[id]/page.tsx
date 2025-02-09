import { JSX } from "react"

import { productIdParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/Product/getProducts"
import ProductPage from "@/components/Products/ProductPage"

export default async function MenProductPage({ params }: { params: Promise<{ id: string }> }): Promise<JSX.Element> {
  const { id } = await params
  const response = await getProducts(productIdParams(id))
  const product = response.data ? response.data[0] : null

  return <ProductPage product={product} />
}
