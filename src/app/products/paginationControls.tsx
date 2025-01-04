"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  totalItems: number
  pageSize: number
}

export default function PaginationControls({ currentPage, totalPages, totalItems, pageSize }: PaginationControlsProps) {
  const pathname = usePathname()

  const startIndex = (currentPage - 1) * pageSize + 1
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems)

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <div className="flex w-full justify-between">
        <Button disabled={currentPage === 1}>
          <Link href={`${pathname}?page=${currentPage - 1}`}>Anterior</Link>
        </Button>
        <Button disabled={currentPage === totalPages}>
          <Link href={`${pathname}?page=${currentPage + 1}`}>Siguiente</Link>
        </Button>
      </div>
      <p className="text-sm text-gray-600">
        Mostrando productos {startIndex} - {endIndex} de {totalItems}
      </p>
      <p className="text-sm text-gray-600">
        Página {currentPage} de {totalPages}
      </p>
    </div>
  )
}
