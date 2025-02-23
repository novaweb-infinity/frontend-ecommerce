"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

import { registerUser } from "@/api/services/auth"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { RegisterFormProps, RegisterProps } from "@/types/index"
import { registerSchema } from "@/validators/registerSchema"

export default function Register({ open, onOpenChange }: RegisterProps) {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const form = useForm<RegisterFormProps>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      privacyPolicy: false,
      receiveNews: false,
    },
  })

  useEffect(() => {
    if (!open) {
      form.reset()
      form.clearErrors()
    }
  }, [open, form])

  const onSubmit = async (data: RegisterFormProps) => {
    setLoading(!loading)

    try {
      const response = await registerUser(data)
      console.log("Usuario registrado:", response)
    } catch (error) {
      console.error("Error al registrar el usuario:", (error as Error).message)
    } finally {
      setLoading(!loading)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full bg-white p-6 sm:w-[400px]">
        <div className="space-y-6">
          <SheetTitle className="text-center text-2xl font-bold text-black">CREA UNA CUENTA</SheetTitle>
          <SheetDescription className="text-center dark:text-gray-800">
            Introduce tus datos para registrarte
          </SheetDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-800">Dirección de correo electrónico</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="ejemplo@correo.com" autoComplete="email" />
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
                    <FormLabel className="dark:text-gray-800">Contraseña</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 flex items-center px-2"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-800">Repite la contraseña</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute inset-y-0 right-0 flex items-center px-2"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <FormField
                  name="privacyPolicy"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="privacy-policy" checked={field.value} onCheckedChange={field.onChange} />
                        <FormLabel className="text-sm text-gray-700">
                          He podido leer y entiendo la información sobre el uso de mis datos personales explicada en la
                          Política de Privacidad.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-2">
                  <Controller
                    name="receiveNews"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox id="receive-news" checked={field.value} onCheckedChange={field.onChange} />
                    )}
                  />
                  <Label htmlFor="receive-news" className="text-sm text-gray-700">
                    Quiero recibir novedades y comunicaciones comerciales personalizadas.
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">
                Regístrate
              </Button>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
