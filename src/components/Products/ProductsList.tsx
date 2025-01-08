import { ProductProps } from "@/types"

import ProductsGrid from "./ProductsGrid"

export default function ProductsList({ products }: { products: ProductProps[] }) {
  return (
    <>
      <ProductsGrid products={products} />
    </>
  )
}
