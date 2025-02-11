"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <div className="mx-auto mt-40 min-h-screen max-w-4xl space-y-10 p-10 xl:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center text-4xl font-bold text-gray-800"
      >
        Contáctanos
      </motion.h1>
      <Separator className="mb-6" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-lg leading-relaxed text-gray-700"
      >
        En <strong>NovaWeb Infinity</strong>, valoramos tu opinión y estamos aquí para ayudarte. Utiliza nuestro correo
        electrónico para comunicarte directamente con nosotros.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-6 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">Información de Contacto</h2>
            <p className="leading-relaxed text-gray-700">
              <strong>Correo Electrónico:</strong> hello@novawebinfinity.com
              <br />
              <strong>Teléfono:</strong> +123 456 7890
              <br />
              <strong>Dirección:</strong> Calle de la Innovación 3000, Ciudad Digital, Mundo Web
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Card className="rounded-3xl bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">¿Listo para trabajar con nosotros?</h2>
            <p className="leading-relaxed">
              Nos encantaría saber más sobre tu proyecto. ¡Envíanos un mensaje a nuestro correo y hablemos de cómo
              podemos llevar tus ideas más allá del infinito!
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
