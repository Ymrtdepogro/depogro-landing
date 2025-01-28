"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-700 to-purple-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-jakarta">
              À Propos de DEPOGRO
            </h1>
            <p className="text-lg text-purple-100">
              Une plateforme e-commerce révolutionnaire qui transforme le paysage de la distribution en Tunisie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Facilité d'Utilisation</h3>
              <p className="text-gray-600">
                Interface intuitive pour gestion simplifiée. Que vous soyez un nouveau commerçant ou un habitué de la vente en ligne.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Prix Compétitifs</h3>
              <p className="text-gray-600">
                Prix compétitifs, offres imbattables. Nous nous engageons à vous offrir les meilleurs prix du marché.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Service Clientèle Dédié</h3>
              <p className="text-gray-600">
                Support client dévoué pour votre réussite. Notre équipe est là pour répondre à toutes vos questions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <Image
                src="https://depogro.com/assets/stafet.svg"
                alt="DEPOGRO Mission"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-jakarta">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                DEPOGRO s'engage à révolutionner le commerce de détail en Tunisie en offrant une solution tout-en-un qui simplifie la gestion des stocks, optimise les livraisons et améliore l'expérience client.
              </p>
              <p className="text-lg text-gray-600">
                Notre plateforme est conçue pour les commerçants de détail, les restaurants et les cafés, offrant une expérience mobile fluide et intuitive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}