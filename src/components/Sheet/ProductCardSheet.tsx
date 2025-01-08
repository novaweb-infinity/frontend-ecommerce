import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ProductProps } from "@/types"

interface ProductCardSheetProps {
  product: ProductProps
  onRemove: () => void
  onAddToCartOrFavorite: () => void
  isFavorite: boolean
}

export function ProductCardSheet({ product, onRemove, onAddToCartOrFavorite, isFavorite }: ProductCardSheetProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex h-32">
          <Image
            src={product.images[0].url}
            alt={product.productName}
            width={128}
            height={128}
            className="h-full w-32 object-cover"
          />
          <div className="relative flex flex-1 flex-col p-2">
            <div className="mt-1 flex flex-1 flex-col justify-between">
              <div className="flex flex-col space-y-1">
                <CardTitle className="font-semibold">{product.productName}</CardTitle>
                <p className="text-sm text-gray-500">Ref.{product.id}</p>
                <div className="mt-1 flex items-center">
                  <div className={`mr-2 h-4 w-4 rounded-full border border-black bg-blue-500`} />
                </div>
              </div>
              <p className="font-bold">{product.price} €</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="m-1 rounded-lg p-2"
              onClick={onRemove}
              aria-label="Eliminar producto"
            >
              <Trash2 className="h-4 w-4 p-2" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="m-1 rounded-lg p-2"
              onClick={onAddToCartOrFavorite}
              aria-label={isFavorite ? "Añadir al carrito" : "Añadir a favoritos"}
            >
              {isFavorite ? <ShoppingCart className="h-4 w-4 p-2" /> : <Heart className="h-4 w-4 p-2" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
