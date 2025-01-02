import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function SocialMedia() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">Síguenos</h3>
      <div className="flex space-x-4">
        <Link href="#">
          <Facebook />
        </Link>
        <Link href="#">
          <Twitter />
        </Link>
        <Link href="#">
          <Instagram />
        </Link>
        <Link href="#">
          <Youtube />
        </Link>
      </div>
    </div>
  )
}
