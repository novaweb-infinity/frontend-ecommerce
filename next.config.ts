import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "res.cloudinary.com"], // Agrega aquí los dominios desde los que cargarás imágenes
  },
  // Otras configuraciones de Next.js
}

export default nextConfig
