import { Heart, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardSheetProps {
  product: {
    id: number
    name: string
    reference: string
    color: string
    price: string
    image: string
  }
  onRemove: () => void
  onAddToCartOrFavorite: () => void
  isFavorite: boolean
}

export function ProductCardSheet({ product, onRemove, onAddToCartOrFavorite, isFavorite }: ProductCardSheetProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex h-32">
          <img src={product.image} alt={product.name} className="h-full w-32 object-cover" />
          <div className="relative flex flex-1 flex-col justify-between p-2">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.reference}</p>
              <div className="mt-1 flex items-center">
                <div className={`${product.color} mr-2 h-4 w-4 rounded-full border border-black`} />
              </div>
            </div>
            <p className="font-bold">{product.price}</p>
            <Button variant="ghost" size="icon" className="absolute right-4 top-4 h-4 w-4" onClick={onRemove}>
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="absolute bottom-4 right-4 h-4 w-4" onClick={onAddToCartOrFavorite}>
              {isFavorite ? <ShoppingCart className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
