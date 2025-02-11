"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutUs() {
  return (
    <div className="mx-auto mt-40 min-h-screen max-w-4xl space-y-10 p-10 xl:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center text-4xl font-bold text-gray-800"
      >
        Sobre Nosotros
      </motion.h1>
      <Separator className="mb-6" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-lg leading-relaxed text-gray-700"
      >
        En <strong>NovaWeb Infinity</strong> creemos que cada proyecto es único, al igual que cada cliente. Nos apasiona
        crear soluciones personalizadas porque entendemos que no existen dos negocios iguales. Nos esforzamos por
        escuchar, entender y transformar tus ideas en aplicaciones web que realmente aporten valor a tu empresa.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-6 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">Nuestra Meta</h2>
            <p className="leading-relaxed text-gray-700">
              Nuestra meta no es solo desarrollar tecnología, sino construir experiencias digitales que impulsen tu
              crecimiento y te conecten de manera auténtica con tus usuarios. Innovación, calidad y compromiso son los
              pilares que nos guían, asegurando que cada línea de código refleje nuestra dedicación a tu éxito.
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
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">Nuestra Filosofía</h2>
            <p className="leading-relaxed text-gray-700">
              En <strong>NovaWeb Infinity</strong>, tu visión es nuestra inspiración. Juntos, llevamos tus ideas más
              allá del infinito. Nos caracterizamos por un enfoque centrado en el usuario, donde la creatividad y la
              innovación son la base de todo lo que hacemos.
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
        <Card className="rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">¿Por Qué Elegirnos?</h2>
            <ul className="list-inside list-disc leading-relaxed">
              <li>Desarrollo a medida adaptado a las necesidades de cada cliente.</li>
              <li>Compromiso con la calidad en cada detalle de nuestros proyectos.</li>
              <li>Innovación constante para mantenerte a la vanguardia tecnológica.</li>
              <li>Comunicación transparente y colaboración continua.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
