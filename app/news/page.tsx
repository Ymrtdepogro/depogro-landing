"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const newsItems = [
  {
    title: "DEPOGRO lance son application mobile",
    date: "15 Mars 2024",
    image: "https://depogro.com/assets/descr.svg",
    description: "Découvrez notre nouvelle application mobile qui révolutionne la distribution en Tunisie."
  },
  {
    title: "Partenariat avec de grandes marques",
    date: "10 Mars 2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000",
    description: "DEPOGRO étend son réseau de partenaires avec l'ajout de nouvelles marques prestigieuses."
  },
  {
    title: "Expansion des services de livraison",
    date: "5 Mars 2024",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000",
    description: "Notre service de livraison rapide est maintenant disponible dans plus de régions."
  }
]

export default function NewsPage() {
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
              News & Media
            </h1>
            <p className="text-lg text-purple-100">
              Restez informé des dernières actualités et développements de DEPOGRO
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://depogro.s3.eu-north-1.amazonaws.com/Video/Video_Depot.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">DEPOGRO Dépôt</h3>
                <p className="text-gray-600">Découvrez notre solution innovante pour la gestion des dépôts.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://depogro.com/motion%20depogro%20eng%20&%20fr.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">DEPOGRO Présentation</h3>
                <p className="text-gray-600">Une présentation complète de nos services et solutions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Media Coverage */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-jakarta">
            Couverture Médiatique
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <Image
                src="https://depogro.com/assets/product.svg"
                alt="DEPOGRO Media Coverage"
                fill
          
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Notre Impact dans les Médias</h3>
              <p className="text-lg text-gray-600 mb-6">
                DEPOGRO continue de faire les gros titres en tant que leader de l'innovation dans le secteur de la distribution en Tunisie. Notre approche révolutionnaire et notre engagement envers l'excellence ont attiré l'attention des médias nationaux et internationaux.
              </p>
              <p className="text-lg text-gray-600">
                Découvrez comment DEPOGRO transforme le paysage du commerce de détail et crée de nouvelles opportunités pour les entreprises tunisiennes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}