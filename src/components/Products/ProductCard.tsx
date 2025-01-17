"use client"

import { HeartIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { addItem } from "@/store/slices/cartSlice"
import { ProductProps } from "@/types/productProps"

export default function ProductCard({ product }: { product: ProductProps }) {
  const imageUrl = product.images?.length > 0 ? `${product.images[0].url}` : "/c-1.avif"
  const dispatch = useDispatch()
  const router = useRouter()

  const handleAddToCart = () => {
    dispatch(addItem(product))
  }

  const handleCardImageClick = () => {
    let categoryPath = ""
    switch (product.productCategory) {
      case "Niño":
        categoryPath = "kid"
        break
      case "Hombre":
        categoryPath = "men"
        break
      case "Mujer":
        categoryPath = "woman"
        break
      default:
        break
    }

    router.push(`/products/${categoryPath}/${product.documentId}`)
  }

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full overflow-hidden md:h-72 lg:h-80 xl:h-96">
          <Image
            src={imageUrl}
            alt={product.productName}
            fill
            className="rounded-t-md transition-transform duration-300 ease-in-out hover:scale-125 hover:cursor-pointer"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onClick={handleCardImageClick}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between p-4">
        <CardTitle className="mb-2 text-lg font-semibold">{product.productName}</CardTitle>
        <p className="truncate-description mb-2 text-sm text-gray-600 dark:text-blue-50">{product.description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <div className="mb-2 flex items-center justify-between">
            <span className="p-1 text-lg font-bold">{product.price.toFixed(2)}€</span>
            <Badge className="bg-gray-600 hover:bg-slate-500 dark:text-blue-50">{product.productCategory}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-blue-50">Tallas: S, M, L, XL</div>
            <Button variant="ghost" className="px-1 py-2 font-semibold text-black hover:bg-gray-100">
              <HeartIcon className="p-1" size={20} />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={handleAddToCart} className="w-full bg-gray-300 font-semibold text-black hover:bg-slate-500">
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
