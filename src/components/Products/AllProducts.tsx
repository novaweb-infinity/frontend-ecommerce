import ProductCard from "@/components/Products/ProductCard"
import { ProductProps } from "@/types/productProps"

export default async function AllProducts({ products }: { products: ProductProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
