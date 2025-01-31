"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Store, Truck, ShoppingBag, Phone } from "lucide-react";
import Image from "next/image";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { submitContact, type ContactFormData } from "@/lib/sanity";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import vanDepo from "@/assets/vandepo.png";
import web2 from "@/assets/web 1.png";
import phonefr from "@/assets/phonefr.png";
import phonear from "@/assets/phonear.png";
import { isRTL } from "@/lib/utils";
import { BrandsCarousel } from "../components/BrandsCarousel";

export default function Home() {
  const brands = [
    {
      id: 0,
      name: "said",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/2dqmfpie-tARrX6Fhk2Pt",
    },
    {
      id: 1,
      name: "safia",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/wb52UEeZ2YULGuVtWgpIa",
    },
    {
      id: 2,
      name: "saida",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/iEFSDOhO4OhatrToggHwi",
    },
    {
      id: 3,
      name: "cerealis",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/WToJGO_bu9cWS3OdmJULz",
    },
    {
      id: 4,
      name: "pringles",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/1_QGDbo6hwhwFibquKC87",
    },
    {
      id: 5,
      name: "precident",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/pazeheV6-KZqIsG58BuU5",
    },
    {
      id: 6,
      name: "tropico",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/HaFEIePnejAoZNaXnr6j2",
    },
    {
      id: 7,
      name: "shark",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/KEZYA-Mv6bIg98xl6PW25",
    },
    {
      id: 8,
      name: "moulin",
      image:
        "https://s3-eu-north-1.amazonaws.com/depogro/brands/THJlVmECSq6ONlcWhgxjw",
    },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguageStore();
  const rtl = isRTL(language);
  const t = translations[language];
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data: ContactFormData = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      };

      const result = await submitContact(data);

      if (result.success) {
        toast({
          title: language === "fr" ? "Message envoyé" : "تم إرسال الرسالة",
          description:
            language === "fr"
              ? "Nous vous contacterons bientôt."
              : "سنتواصل معك قريباً.",
          variant: "default",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: language === "fr" ? "Erreur" : "خطأ",
        description:
          language === "fr"
            ? "Une erreur s'est produite. Veuillez réessayer."
            : "حدث خطأ. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${rtl ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#46276B] via-[#5D3C8C] to-[#D8C4B6] pt-32"
      >
        <div className="container px-6 mx-auto relative z-10">
          <div
            className={`grid lg:grid-cols-2 ${
              rtl ? "lg:grid-flow-col-dense" : ""
            } gap-12 items-center`}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={rtl ? "lg:order-1" : ""}
            >
              <h1
                className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide ${
                  rtl ? "text-right" : ""
                } `}
              >
                {t.hero.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-purple-100 mb-8 leading-relaxed ${
                  rtl ? "text-right" : ""
                }`}
              >
                {t.hero.download}
              </p>
              <div
                className={`flex flex-col sm:flex-row ${
                  rtl ? "sm:flex-row-reverse" : ""
                } gap-6`}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.amine_amdouni.DepoGroApp&hl=en"
                  className="market-btn google-btn"
                  role="button"
                >
                  <span className="market-button-subtitle ">GET IT ON</span>
                  <span className="market-button-title">Google Play</span>
                </a>
                <a
                  href="https://apps.apple.com/us/app/depogro/id6480517238?uo=2"
                  className="market-btn apple-btn"
                  role="button"
                >
                  <span className="market-button-subtitle">
                    Download on the
                  </span>
                  <span className="market-button-title">App Store</span>
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative w-full h-[500px] lg:h-[700px] lg:col-span-1 flex justify-center items-center ${
                rtl ? "lg:order-0" : ""
              }`}
            >
              <div className={`absolute inset-0 overflow-hidden rounded-lg`}>
                <Image
                  src={rtl ? phonear : phonefr}
                  alt="Depogro App"
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white text-gray-800">
        <div className="container px-6 mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jakarta text-[#46276B]">
              {t.about.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">{t.about.desc}</p>
          </motion.div>

          {/* Content Layout */}
          <div
            className={`grid lg:grid-cols-2 ${
              rtl ? "lg:grid-flow-col-dense" : ""
            } gap-12 items-center`}
          >
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src={vanDepo}
                alt="DEPOGRO Mission"
                layout="fill"
                className="object-cover"
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-center lg:text-left ${
                rtl ? "lg:text-right" : ""
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-jakarta text-[#46276B]">
                {t.about.mission}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                {t.about.missionDesc}
              </p>
              <p className="text-lg md:text-xl text-gray-600">
                {t.about.missionDesc2}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 section-bg-2">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-jakarta text-[#6B2FB3]">
            {t.services.title}
          </h2>
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 ${
              rtl ? "md:grid-flow-row-dense lg:grid-flow-col-dense" : ""
            } gap-8`}
          >
            {[
              {
                icon: <Store className="h-8 w-8" />,
                title: t.services.service1.title,
                description: t.services.service1.dec,
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: t.services.service2.title,
                description: t.services.service2.dec,
              },
              {
                icon: <ShoppingBag className="h-8 w-8" />,
                title: t.services.service3.title,
                description: t.services.service3.dec,
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: t.services.service4.title,
                description: t.services.service4.dec,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 inline-block p-3 bg-purple-100 rounded-lg text-[#6B2FB3]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Produit Section */}
      <section
        id="produit"
        className="py-24 bg-gradient-to-r from-[#46276B] to-[#D8C4B6] text-white"
      >
        <div className="container px-6 mx-auto">
          <div
            className={`grid lg:grid-cols-3 ${
              rtl ? "lg:grid-flow-col-dense" : ""
            } gap-12 items-center`}
          >
            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`space-y-6 lg:col-span-1 ${rtl ? "lg:order-2" : ""}`}
            >
              <h2
                className={`text-3xl md:text-4xl font-bold ${
                  rtl ? "text-right" : ""
                }`}
              >
                {t.produit.title}
              </h2>
              <p className={`text-lg md:text-xl ${rtl ? "text-right" : ""}`}>
                {t.produit.description}
              </p>
            </motion.div>

            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative w-full h-[500px] lg:h-[700px] lg:col-span-1 flex justify-center items-center ${
                rtl ? "lg:order-1" : ""
              }`}
            >
              <div className={`absolute inset-0 overflow-hidden rounded-lg`}>
                <Image
                  src={web2 || "/placeholder.svg"}
                  alt="Produit image"
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Stats/Phrases (Discussion Bubbles) */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`space-y-6 lg:col-span-1 ${rtl ? "lg:order-0" : ""}`}
            >
              {/* Phrase 1 */}
              <div className="p-6 bg-white bg-opacity-90 rounded-2xl shadow-lg relative">
                <h3
                  className={`text-xl font-semibold text-[#6B2FB3] ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.produit.stat1.title}
                </h3>
                <p
                  className={`text-lg text-gray-700 ${rtl ? "text-right" : ""}`}
                >
                  {t.produit.stat1.content}
                </p>
              </div>

              {/* Phrase 2 */}
              <div className="p-6 bg-white bg-opacity-90 rounded-2xl shadow-lg relative">
                <h3
                  className={`text-xl font-semibold text-[#6B2FB3] ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.produit.stat2.title}
                </h3>
                <p
                  className={`text-lg text-gray-700 ${rtl ? "text-right" : ""}`}
                >
                  {t.produit.stat2.content}
                </p>
              </div>

              {/* Phrase 3 */}
              <div className="p-6 bg-white bg-opacity-90 rounded-2xl shadow-lg relative">
                <h3
                  className={`text-xl font-semibold text-[#6B2FB3] ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.produit.stat3.title}
                </h3>
                <p
                  className={`text-lg text-gray-700 ${rtl ? "text-right" : ""}`}
                >
                  {t.produit.stat3.content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* News & Media Section */}
      <section
        id="news"
        className="py-24 bg-gradient-to-r from-[#46276B] to-[#D8C4B6]"
      >
        <div className="container px-4 mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jakarta text-white">
              {t.news.title}
            </h2>
            <p className="text-lg md:text-xl text-purple-100">{t.news.dec}</p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm"
          >
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9KpHxHqtiPE"
                title="depogo"
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Brands Section */}
      <BrandsCarousel brands={brands} t={t} />
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div
            className={`grid lg:grid-cols-2 ${
              rtl ? "lg:grid-flow-col-dense" : ""
            } gap-12`}
          >
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`space-y-8 ${rtl ? "lg:order-1" : ""}`}
            >
              <div>
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-4 text-[#46276B] font-jakarta ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.contact.title}
                </h2>
                <p
                  className={`text-lg md:text-xl text-gray-600 ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.contact.subtitle}
                </p>
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-semibold mb-2 text-[#46276B] ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.contact.address}
                </h3>
                <p className={`text-gray-600 ${rtl ? "text-right" : ""}`}>
                  Rue du Parc, Ariana 2036, Tunisie
                </p>
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-semibold mb-2 text-[#46276B] ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.contact.telephone}{" "}
                </h3>
                <p className={`text-gray-600  ${rtl ? "text-right" : ""}`}>
                  +216 56 000 444
                </p>
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-semibold mb-2 text-[#46276B] ${
                    rtl ? "text-right" : ""
                  }`}
                >
                  {t.contact.email}
                </h3>
                <p className={`text-gray-600 ${rtl ? "text-right" : ""}`}>
                  contact@depogro.com
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 backdrop-blur-sm ${
                rtl ? "lg:order-0" : ""
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`space-y-2 ${rtl ? "text-right" : ""}`}>
                    <label
                      htmlFor="firstName"
                      className={`text-sm font-medium text-gray-700${
                        rtl ? "text-right" : ""
                      }`}
                    >
                      {t.contact.form.firstName}
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder={t.contact.form.firstName}
                      required
                      disabled={isSubmitting}
                      className={`space-y-2 ${rtl ? "text-right" : ""}`}
                    />
                  </div>
                  <div className={`space-y-2 ${rtl ? "text-right" : ""}`}>
                    <label
                      htmlFor="lastName"
                      className={`text-sm font-medium text-gray-700${
                        rtl ? "text-right" : ""
                      }`}
                    >
                      {t.contact.form.lastName}
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder={t.contact.form.lastName}
                      required
                      disabled={isSubmitting}
                      className={`space-y-2 ${rtl ? "text-right" : ""}`}
                    />
                  </div>
                </div>
                <div className={`space-y-2 ${rtl ? "text-right" : ""}`}>
                  <label
                    htmlFor="email"
                    className={`text-sm font-medium text-gray-700${
                      rtl ? "text-right" : ""
                    }`}
                  >
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.form.email}
                    required
                    disabled={isSubmitting}
                    className={`space-y-2 ${rtl ? "text-right" : ""}`}
                  />
                </div>
                <div className={`space-y-2 ${rtl ? "text-right" : ""}`}>
                  <label
                    htmlFor="message"
                    className={`text-sm font-medium text-gray-700${
                      rtl ? "text-right" : ""
                    }`}
                  >
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.contact.form.message}
                    required
                    disabled={isSubmitting}
                    className={` min-h-[150px] space-y-2 ${
                      rtl ? "text-right" : ""
                    }`}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#46276B] hover:bg-[#5a279a] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? language === "fr"
                      ? "Envoi en cours..."
                      : "جاري الإرسال..."
                    : t.contact.form.submit}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
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
      {/* Footer Section */}
      <section className="py-4" style={{ backgroundColor: "#46276B" }}>
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} {t.footer.desc}
          </p>
          <p className="text-sm text-white">
            <a href={t.footer.terms} className="hover:underline">
              {t.footer.title}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
