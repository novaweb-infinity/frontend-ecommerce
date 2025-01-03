import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/types"

export default function ProductCard({ product }: { product: Product }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const imageUrl = product.images?.length > 0 ? `${baseUrl}${product.images[0].url}` : "/c-1.avif"

  return (
    <Card className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      <CardContent className="flex flex-col items-center p-4">
        <div className="relative h-64 w-full overflow-hidden md:h-72 lg:h-80 xl:h-96">
          <Image
            src={imageUrl}
            alt={product.productName}
            fill
            className="rounded-md"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <h3 className="mt-2 text-center text-lg font-semibold">{product.productName}</h3>
        <p className="text-center text-gray-300">{product.price.toFixed(2)} €</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full">Añadir al carrito</Button>
      </CardFooter>
    </Card>
  )
}
