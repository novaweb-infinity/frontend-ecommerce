import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "images.unsplash.com",
      "ec2-3-72-39-16.eu-central-1.compute.amazonaws.com",
    ], // Agrega aquí los dominios desde los que cargarás imágenes
    formats: ["image/avif", "image/webp"],
    // unoptimized: true,
  },
  // Otras configuraciones de Next.js
}

export default nextConfig
