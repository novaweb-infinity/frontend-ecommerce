import Image from "next/image"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RootState } from "@/store"
import { addItem } from "@/store/slices/cartSlice"
import { ProductProps } from "@/types/productProps"

export default function ProductCard({ product }: { product: ProductProps }) {
  const imageUrl = product.images?.length > 0 ? `${product.images[0].url}` : "/c-1.avif"
  const dispatch = useDispatch()

  const itemsCart = useSelector((state: RootState) => state.cart.items)
  console.log(itemsCart)
  const handleAddToCart = () => {
    dispatch(addItem(product))
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full overflow-hidden md:h-72 lg:h-80 xl:h-96">
          <Image
            src={imageUrl}
            alt={product.productName}
            fill
            className="rounded-t-md"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2 text-lg font-semibold">{product.productName}</CardTitle>
        <p className="mb-2 text-sm text-gray-600">{product.description}</p>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg font-bold">{product.price.toFixed(2)}€</span>
          <Badge className="bg-gray-600 hover:bg-slate-500">{product.productCategory}</Badge>
        </div>
        <div className="text-sm text-gray-600">Tallas: S, M, L, XL</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-gray-300 font-semibold text-black hover:bg-slate-500">
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
