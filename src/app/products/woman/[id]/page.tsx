import { productIdParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/Product/getProducts"
import ProductPage from "@/components/Products/ProductPage"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function WomanProductPage({ params }: ProductPageProps) {
  const { id } = params

  const response = await getProducts(productIdParams(id))
  const product = response.data[0]

  return (
    <>
      <ProductPage product={product} />
    </>
  )
}
