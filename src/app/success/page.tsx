import { CheckCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-center text-2xl font-bold">¡Pago Exitoso!</CardTitle>
          <CardDescription className="text-center">Tu transacción se ha completado con éxito.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Volver a la página principal</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
