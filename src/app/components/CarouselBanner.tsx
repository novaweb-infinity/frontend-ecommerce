"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const items = [
  { id: 1, src: "/banner1.jpg", alt: "Ropa casual" },
  { id: 2, src: "/banner2.jpg", alt: "Ropa deportiva" },
  { id: 3, src: "/banner3.jpg", alt: "Ropa formal" },
]

export default function CarouselBanner() {
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]} className="w-full">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="relative h-[40rem] w-full">
            <Image src={item.src} alt={item.alt} fill priority objectFit="cover" className="rounded-md" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
