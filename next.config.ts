import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "images.unsplash.com",
      "ec2-3-122-233-89.eu-central-1.compute.amazonaws.com:1337",
    ], // Agrega aquí los dominios desde los que cargarás imágenes
  },
  // Otras configuraciones de Next.js
}

export default nextConfig
