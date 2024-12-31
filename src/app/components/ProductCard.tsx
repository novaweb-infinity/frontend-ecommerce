import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/types"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardContent className="p-4">
        <Image src="/hero-image.avif" alt={product.productName} width={300} height={300} className="rounded-md" />
        <h3 className="mt-2 text-lg font-semibold">{product.productName}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Añadir al carrito</Button>
      </CardFooter>
    </Card>
  )
}
