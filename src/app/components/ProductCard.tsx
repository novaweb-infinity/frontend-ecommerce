import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/types"

export default function ProductCard({ product }: { product: Product }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const imageUrl = product.images.length > 0 ? `${baseUrl}${product.images[0].url}` : "/c-1.avif"

  return (
    <Card className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      {" "}
      {/* Ajusta el tamaño de la tarjeta */}
      <CardContent className="flex flex-col items-center p-4">
        <div className="flex h-64 w-full items-center justify-center overflow-hidden md:h-72 lg:h-80 xl:h-96">
          {" "}
          {/* Contenedor para la imagen */}
          <Image
            src={imageUrl}
            alt={product.productName}
            layout="responsive"
            width={300}
            height={300}
            objectFit="cover"
            className="rounded-md"
          />{" "}
          {/* Ajusta el tamaño de la imagen */}
        </div>
        <h3 className="mt-2 text-center text-lg font-semibold">{product.productName}</h3>
        <p className="text-center text-gray-600">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full">Añadir al carrito</Button>
      </CardFooter>
    </Card>
  )
}
