"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const items = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Ropa casual" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Ropa deportiva" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Ropa formal" },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-96 w-full overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  )
}
