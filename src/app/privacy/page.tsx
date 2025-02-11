"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto mt-40 min-h-screen max-w-4xl space-y-10 p-10 xl:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center text-4xl font-bold text-gray-800"
      >
        Política de Privacidad
      </motion.h1>
      <Separator className="mb-6" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-lg leading-relaxed text-gray-700"
      >
        En <strong>NovaWeb Infinity</strong>, tu privacidad es importante para nosotros. Esta política explica cómo
        recopilamos, usamos y protegemos tu información personal cuando utilizas nuestros servicios.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-6 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">1. Información que Recopilamos</h2>
            <p className="leading-relaxed text-gray-700">
              Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y detalles
              de contacto cuando interactúas con nuestros servicios. También podemos recopilar datos de uso para mejorar
              tu experiencia.
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
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">2. Uso de la Información</h2>
            <p className="leading-relaxed text-gray-700">
              Utilizamos tu información para brindarte un mejor servicio, personalizar tu experiencia, gestionar
              solicitudes y mantener la seguridad de nuestra plataforma. Nunca compartimos tu información con terceros
              sin tu consentimiento.
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
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">3. Seguridad de los Datos</h2>
            <p className="leading-relaxed text-gray-700">
              Nos tomamos muy en serio la seguridad de tu información. Implementamos medidas de seguridad para proteger
              tus datos contra accesos no autorizados, alteraciones o divulgaciones indebidas.
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
        <Card className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">4. Cambios en esta Política</h2>
            <p className="leading-relaxed">
              Podemos actualizar esta política de vez en cuando para reflejar cambios en nuestras prácticas. Te
              notificaremos cualquier actualización importante para que estés informado.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
