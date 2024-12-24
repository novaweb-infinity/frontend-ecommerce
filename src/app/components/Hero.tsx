import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image src="/placeholder.svg?height=1080&width=1920" alt="Hero image" layout="fill" objectFit="cover" priority />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-6xl font-bold text-white">Bienvenido a nuestra tienda</h1>
      </div>
    </div>
  )
}
