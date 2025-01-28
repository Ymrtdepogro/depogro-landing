"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContact, type ContactFormData } from "@/lib/sanity"
import { useLanguageStore } from "@/lib/store"
import { translations } from "@/lib/translations"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { language } = useLanguageStore()
  const t = translations[language].contact
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data: ContactFormData = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      }

      const result = await submitContact(data)

      if (result.success) {
        toast({
          title: language === 'fr' ? "Message envoyé" : "تم إرسال الرسالة",
          description: language === 'fr' 
            ? "Nous vous contacterons bientôt."
            : "سنتواصل معك قريباً.",
          variant: "default"
        })
        e.currentTarget.reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      toast({
        title: language === 'fr' ? "Erreur" : "خطأ",
        description: language === 'fr'
          ? "Une erreur s'est produite. Veuillez réessayer."
          : "حدث خطأ. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-700 via-purple-800 to-orange-500">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-jakarta">
              {t.title}
            </h1>
            <p className="text-lg text-purple-100">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 font-jakarta">
                  {language === 'fr' ? 'Nos Coordonnées' : 'معلومات الاتصال'}
                </h2>
                <p className="text-gray-600">
                  {language === 'fr' 
                    ? 'Vous pouvez nous contacter directement ou utiliser le formulaire ci-dessous.'
                    : 'يمكنك الاتصال بنا مباشرة أو استخدام النموذج أدناه.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'fr' ? 'Adresse' : 'العنوان'}
                </h3>
                <p className="text-gray-600">Rue du Parc, Ariana 2036, Tunisie</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'fr' ? 'Téléphone' : 'الهاتف'}
                </h3>
                <p className="text-gray-600">+216 71 123 456</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@depogro.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      {t.form.firstName}
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder={t.form.firstName}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      {t.form.lastName}
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder={t.form.lastName}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.form.email}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.form.message}
                    className="min-h-[150px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (language === 'fr' ? "Envoi en cours..." : "جاري الإرسال...")
                    : t.form.submit}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5854845421904!2d10.253611!3d36.867901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUyJzA0LjMiTiAxMMKwMTUnMTcuNCJF!5e0!3m2!1sfr!2stn!4v1650000000000!5m2!1sfr!2stn"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}