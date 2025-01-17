"use client"

import { Heart, Share2 } from "lucide-react"
import Image from "next/image"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ProductPage() {
  return (
    <div className="container mx-auto my-8 px-4 py-6">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image src="/liftiesImage.webp" alt="Vestido cruzado aberturas" fill className="object-cover" priority />
            </div>

            {/* Product Details */}
            <div className="space-y-6 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-semibold">Vestido cruzado aberturas</h1>
                  <div className="mt-2 space-x-2">
                    <span className="text-lg text-muted-foreground line-through">15,99 €</span>
                    <span className="text-xl font-bold">5,99 €</span>
                    <Badge variant="destructive" className="ml-2">
                      -62%
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Ref: 5081/324/800</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-sm">
                  Vestido midi de manga corta y escote en pico con cierre frontal de doble botonadura a contraste.
                  Cuenta con dos aberturas laterales, es de corte recto y está confeccionado en tejido de canalé.
                </p>

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
                          <Share2 className="mr-2 h-4 w-4" />
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
