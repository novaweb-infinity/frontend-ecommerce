"use client"

import { LogIn } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function LoginModal() {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-1/3 w-1/2 bg-gray-700">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Añadir al carrito</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Iniciar sesión requerido</DialogTitle>
            <DialogDescription>
              Para añadir productos al carrito, necesitas iniciar sesión en tu cuenta.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" onClick={() => setOpen(false)}>
              <LogIn className="mr-2 h-4 w-4" />
              Iniciar sesión
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
