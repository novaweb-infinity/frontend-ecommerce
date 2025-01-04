"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { UserCircle } from "lucide-react"
import { use, useState } from "react"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LoginFormProps } from "@/types"
import { loginSchema } from "@/validators/loginSchema"

import Register from "./Register"

export default function Login() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  const openRegister = () => {
    setLoginOpen(false)
    setRegisterOpen(true)
  }

  useEffect(() => {
    if (!loginOpen) {
      form.reset()
      form.clearErrors()
    }
  }, [loginOpen])

  useEffect(() => {
    if (!registerOpen) {
      form.reset()
      form.clearErrors()
    }
  }, [registerOpen])

  const form = useForm<LoginFormProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      keepLogged: false,
    },
  })

  const onSubmit = (data: LoginFormProps) => {
    console.log("Datos del formulario:", data)
  }

  return (
    <>
      <Sheet open={loginOpen} onOpenChange={setLoginOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg px-8 py-5 text-black hover:bg-gray-100 dark:text-black"
          >
            <UserCircle />
            <span className="sr-only">Iniciar sesión</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-white p-6 sm:w-[400px]">
          <div className="space-y-6">
            <SheetTitle className="text-center text-2xl font-bold text-black">INICIA SESIÓN</SheetTitle>
            <SheetDescription className="text-center text-gray-600">
              Introduce tu dirección de correo electrónico y tu contraseña para acceder.
            </SheetDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección de correo electrónico</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="ejemplo@correo.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" placeholder="••••••••" />
                      </FormControl>
                      <p className="text-xs text-gray-500">
                        La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una minúscula y un
                        número. Por favor, no repitas el mismo carácter más de tres veces.
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-2">
                  <Controller
                    name="keepLogged"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox id="keep-logged" checked={field.value} onCheckedChange={field.onChange} />
                    )}
                  />
                  <Label htmlFor="keep-logged" className="text-sm text-gray-700">
                    Mantén la sesión iniciada
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Inicia sesión
                </Button>
                <div className="space-y-2 text-center">
                  <p className="text-sm text-gray-600">¿No tienes cuenta?</p>
                  <Button variant="outline" className="w-full" onClick={openRegister}>
                    Crea una cuenta
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet>
      <Register open={registerOpen} onOpenChange={setRegisterOpen} />
    </>
  )
}
