import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <Image src="/hero-image.avif" alt="Hero Image" fill priority style={{ objectFit: "cover" }} sizes="100vw" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-6xl font-bold text-white">Bienvenido a tutienda.com</h1>
      </div>
    </div>
  )
}
