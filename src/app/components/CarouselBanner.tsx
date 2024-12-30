"use client"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useEffect } from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const items = [
  { id: 1, src: "/c-1.avif", alt: "Ropa casual" },
  { id: 2, src: "/c-2.avif", alt: "Ropa deportiva" },
  { id: 3, src: "/c-3.avif", alt: "Ropa formal" },
]

export default function CarouselBanner() {
  return (
    <Carousel plugins={[Autoplay({ delay: 2000 })]}>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="relative h-96">
            <Image src={item.src} alt={item.alt} layout="fill" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
