"use client"

import Cookies from "js-cookie"
import { HeartIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { toogleFavorite } from "@/api/services/user/toogleFavorite"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RootState } from "@/store"
import { addItem } from "@/store/slices/cartSlice"
import { addFavorite, removeFavorite } from "@/store/slices/userSlice"
import { ProductProps } from "@/types/productProps"

export default function ProductCard({ product }: { product: ProductProps }) {
  const imageUrl = product.images?.length > 0 ? `${product.images[0].url}` : "/c-1.avif"
  const favorites = useSelector((state: RootState) => state.user.profile.favorites) || []
  const [isLoading, setIsLoading] = useState(false)
  const token = Cookies.get("token")

  const dispatch = useDispatch()
  const router = useRouter()

  const handleAddToCart = () => {
    dispatch(addItem(product))
  }

  const handleAddFavorite = async () => {
    setIsLoading(true)
    const isFavorite = favorites.some((favorite) => favorite.id === product?.id)

    if (isFavorite) {
      dispatch(removeFavorite(product?.id as number))
      console.log("Favorito eliminado correctamente:", product?.id)
    } else {
      dispatch(addFavorite(product as ProductProps))
      console.log("Favorito añadido correctamente:", product?.id)
    }
    try {
      await toogleFavorite(product?.id)
    } catch (error) {
      console.error("Error al añadir o eliminar favorito:", error)
    } finally {
      setIsLoading(false)
    }
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
        console.log("No category found")
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
            priority
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

            {token && (
              <Button onClick={handleAddFavorite} variant="ghost" size="icon" className="p-6">
                <HeartIcon
                  className={`h-5 w-5 ${
                    favorites.some((favorite) => favorite.id === product?.id)
                      ? "fill-red-500 text-red-500"
                      : "fill-none text-gray-500"
                  }`}
                />
              </Button>
            )}
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
