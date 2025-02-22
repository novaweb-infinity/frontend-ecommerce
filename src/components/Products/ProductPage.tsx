"use client"

import Cookies from "js-cookie"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

import { toogleFavorite } from "@/api/services/user/toogleFavorite"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { RootState } from "@/store"
import { addFavorite, removeFavorite } from "@/store/slices/userSlice"
import { ProductPageProps, ProductProps } from "@/types"

export default function ProductPage({ product }: ProductPageProps) {
  const imageUrl = product ? product.images?.[0].url : "/logo.png"
  const token = Cookies.get("token")
  const favorites = useSelector((state: RootState) => state.user.profile.favorites) || []
  const dispatch = useDispatch()

  const handleAddFavorite = async () => {
    const isFavorite = favorites.some((favorite) => favorite.id === product?.id)

    if (isFavorite) {
      dispatch(removeFavorite(product?.id as number))
      console.log("Favorito eliminado correctamente:", product?.id)
    } else {
      dispatch(addFavorite(product as ProductProps))
      console.log("Favorito añadido correctamente:", product?.id)
    }
    await toogleFavorite(product?.id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-6 mt-40 overflow-hidden xl:mt-24">
        <CardContent className="p-0">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={imageUrl}
                alt={product?.description || "Product image"}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-semibold">{product?.productName}</h1>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xl font-bold">{`${product?.price} €`}</span>
                    <Badge variant="destructive" className="ml-2">
                      {product?.productCategory}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{`Ref: ${product?.id}`}</p>
                </div>
                {token && (
                  <Button onClick={handleAddFavorite} variant="ghost" size="icon" className="p-6">
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.some((favorite) => favorite.id === product?.id)
                          ? "fill-red-500 text-red-500" // Relleno rojo si es favorito
                          : "fill-none text-gray-500" // Contorno gris si no es favorito
                      }`}
                    />
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-sm">{product?.description}</p>

                {/* Color Selection */}
                <div className="space-y-2">
                  <Label>Color: Negro</Label>
                  <RadioGroup defaultValue="black" className="flex gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="black" id="black" className="peer sr-only" />
                      <Label
                        htmlFor="black"
                        className="h-6 w-6 rounded-full border border-primary bg-black peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beige" id="beige" className="peer sr-only" />
                      <Label
                        htmlFor="beige"
                        className="h-6 w-6 rounded-full border border-primary bg-[#E8E6E0] peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary"
                      />
                    </div>
                  </RadioGroup>
                </div>

                {/* Size Selection */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Talla</Label>
                    <Button variant="link" className="h-auto p-0">
                      Guía de tallas
                    </Button>
                  </div>
                  <RadioGroup defaultValue="m" className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size.toLowerCase()} id={size} className="peer sr-only" />
                        <Label
                          htmlFor={size}
                          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-input bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full">Añadir a mi cesta</Button>

                {/* Accordion Sections */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="composition">
                    <AccordionTrigger>Composición y cuidados</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        Exterior: 95% Poliéster, 5% Elastano
                        <br />
                        Lavar a máquina máx. 30ºC
                        <br />
                        No usar lejía
                        <br />
                        Planchar máx. 110ºC
                        <br />
                        No limpiar en seco
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="shipping">
                    <AccordionTrigger>Envíos, cambios y devoluciones</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        Envío estándar 2-4 días laborables
                        <br />
                        Envío gratuito en pedidos superiores a 30€
                        <br />
                        Devoluciones gratuitas en 30 días
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="availability">
                    <AccordionTrigger>Disponibilidad en tienda</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">Consulta la disponibilidad en tu tienda más cercana</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="share">
                    <AccordionTrigger>Compartir</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm">
                          <Share2 className="mr-2 h-4 w-4 p-2" />
                          Copiar enlace
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
