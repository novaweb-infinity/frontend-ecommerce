"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsAndConditions() {
  return (
    <div className="mx-auto mt-40 min-h-screen max-w-4xl space-y-10 p-10 xl:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center text-4xl font-bold text-gray-800"
      >
        Términos y Condiciones
      </motion.h1>
      <Separator className="mb-6" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-lg leading-relaxed text-gray-700"
      >
        Bienvenido a <strong>NovaWeb Infinity</strong>. Al utilizar nuestros servicios, aceptas estos términos y
        condiciones. Están diseñados para garantizar una experiencia fluida y segura para todos nuestros usuarios.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-6 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">1. Uso de Nuestros Servicios</h2>
            <p className="leading-relaxed text-gray-700">
              Nuestros servicios están pensados para ayudarte a alcanzar tus metas digitales. Esperamos que los utilices
              de manera responsable, promoviendo un entorno seguro y constructivo para todos.
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
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">2. Propiedad Intelectual</h2>
            <p className="leading-relaxed text-gray-700">
              El contenido y las herramientas que ofrecemos están diseñados con dedicación. Respetamos la creatividad y
              el trabajo de todos, por lo que agradecemos que hagas un uso adecuado del material proporcionado.
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
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">3. Responsabilidad</h2>
            <p className="leading-relaxed text-gray-700">
              Trabajamos para ofrecerte el mejor servicio posible, pero entendemos que la tecnología puede tener sus
              desafíos. Si surge algún inconveniente, haremos todo lo posible por resolverlo de forma rápida y
              eficiente.
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
        <Card className="rounded-3xl bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">4. Actualizaciones de los Términos</h2>
            <p className="leading-relaxed">
              Con el tiempo, es posible que actualicemos estos términos para adaptarnos a nuevas necesidades. Siempre te
              informaremos de cualquier cambio relevante para que estés al tanto.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
