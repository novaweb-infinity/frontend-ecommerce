import { Facebook, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SocialMedia() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">Síguenos</h3>
      <div className="flex space-x-4">
        {/* <Link href="#">
          <Facebook />
        </Link> */}
        <Link href="https://www.instagram.com/novawebinfinity/" target="_blank">
          <Instagram />
        </Link>
        <Link href="https://twitter.com/novawebinfinity" target="_blank">
          <Twitter />
        </Link>
        {/* <Link href="#">
          <Youtube />
        </Link> */}
        <Link href="#">
          <Globe />
        </Link>
      </div>
      <div className="mt-6 flex">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
    </div>
  )
}
