"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function HelpPage() {
  return (
    <div className="mx-auto mt-20 max-w-4xl space-y-10 p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center text-4xl font-bold text-gray-800"
      >
        Centro de Ayuda
      </motion.h1>
      <Separator className="mb-6" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-lg leading-relaxed text-gray-700"
      >
        En <strong>NovaWeb Infinity</strong>, estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas
        asistencia, consulta las secciones a continuación o ponte en contacto con nuestro equipo de soporte.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-6 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">1. Preguntas Frecuentes (FAQ)</h2>
            <p className="leading-relaxed text-gray-700">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, procesos y soporte técnico.
              Revisa esta sección antes de contactarnos, ¡puede que tu duda ya esté resuelta aquí!
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-6 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">2. Soporte Técnico</h2>
            <p className="leading-relaxed text-gray-700">
              Si estás experimentando problemas técnicos, nuestro equipo de soporte está listo para ayudarte. Describe
              tu problema con la mayor cantidad de detalles posible para obtener una respuesta rápida y precisa.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-6 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">3. Contacto Directo</h2>
            <p className="leading-relaxed text-gray-700">
              ¿No encontraste lo que buscabas? No dudes en ponerte en contacto con nosotros directamente a través de
              nuestro correo de soporte: <strong>hello@novawebinfinity.com</strong>.
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
        <Card className="rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">4. Consejos Rápidos</h2>
            <p className="leading-relaxed">
              Para una mejor experiencia, asegúrate de mantener tu navegador actualizado, revisar tu conexión a internet
              y proporcionar capturas de pantalla si es posible al reportar un problema.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
