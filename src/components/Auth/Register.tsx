"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

import apiClient from "@/api/apiClient"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { supabase } from "@/lib/supabaseClient"
import { RegisterFormProps, RegisterProps } from "@/types"
import { registerSchema } from "@/validators/registerSchema"

export default function Register({ open, onOpenChange }: RegisterProps) {
  const [loading, setLoading] = useState(false)

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
      const { data: supabaseResponse, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      })

      if (error) {
        console.log("Error al registrar el usuario:", error.message)
      } else {
        onOpenChange(false)
        await apiClient.post("/api/custom-users", {
          data: {
            email: supabaseResponse.user?.email,
            supabaseUserId: supabaseResponse.user?.id,
          },
        })
      }
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
          <SheetDescription className="text-center text-gray-600">
            Introduce tus datos para registrarte
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repite la contraseña</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="••••••••" />
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
              <Button type="submit" className="w-full">
                Regístrate
              </Button>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
