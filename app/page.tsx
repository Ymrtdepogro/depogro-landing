"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { submitContact, type ContactFormData } from "@/lib/sanity";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import vanDepo from "@/assets/vandepo.png";
import mark from "@/assets/mark.png";
import web2 from "@/assets/web 1.png";
import phonneFr from "@/assets/immg.png";
import phonneAr from "@/assets/immmg.png";
import { isRTL } from "@/lib/utils";
import { Store, Truck, ShoppingBag, Phone, Zap, Target, BookOpen, X, Mail, MapPin } from "lucide-react";
import { BrandsCarousel } from "../components/BrandsCarousel";
import { link } from "node:fs";

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
  const [play, setPlay] = useState(false); 
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
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
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#3d2b63] pt-32 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="container px-6 mx-auto relative z-10">
          <div
            className={`grid lg:grid-cols-2 ${rtl ? "lg:grid-flow-col-dense" : ""} gap-16 items-center`}
          >
            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={rtl ? "lg:order-1" : ""}
            >
              <div className="mb-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 ml-20 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-purple-200">
                    {t.hero.download}
                  </span>
                </motion.div>
              </div>

              <h3
                className={`text-5xl md:text-5xl font-bold mb-8 ml-20 leading-tight tracking-tight text-white ${rtl ? "text-right" : ""}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-200 block mb-4">
                  {t.hero.title.split(' ').slice(0, -1).join(' ')}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  {t.hero.title.split(' ').pop()}
                </span>
              </h3>

              <p
                className={`text-xl md:text-2xl text-purple-100/90 mb-12 ml-20 leading-relaxed font-light max-w-2xl ${rtl ? "text-right ml-auto" : ""}`}
              >
                {t.header.description}
              </p>

              <div className={`flex flex-col sm:flex-row ${rtl ? "sm:flex-row-reverse" : ""} gap-5 ml-20`}>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.google.com/store/apps/details?id=com.amine_amdouni.DepoGroApp&hl=en"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-purple-500/25 transition-all duration-300 flex items-center gap-4 min-w-[200px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L12.866 12l4.832-4.491zM5.864 2.658l10.937 6.333-2.302 2.302-8.635-8.635z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium opacity-90">{t.header.GooglePlay1}</span>
                    <span className="font-bold text-lg">{t.header.GooglePlay2}</span>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://apps.apple.com/us/app/depogro/id6480517238?uo=2"
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-black/25 transition-all duration-300 flex items-center gap-4 min-w-[200px] border border-gray-700/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium opacity-90">{t.header.AppStore1}</span>
                    <span className="font-bold text-lg">{t.header.AppStore2}</span>
                  </div>
                </motion.a>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`flex flex-wrap gap-8 ml-20 mt-16 ${rtl ? "justify-end" : ""}`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">4.8★</div>
                  <div className="text-sm text-purple-200/80">{t.header.AppRating}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">10K+</div>
                  <div className="text-sm text-purple-200/80">{t.header.Downloads}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">99%</div>
                  <div className="text-sm text-purple-200/80">{t.header.Satisfaction}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative w-full h-[300px] md:h-[500px] lg:h-[600px] flex justify-center items-center ${rtl ? "lg:order-0" : ""}`}
            >
              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>

              {/* Phone Container */}
              <div className="relative w-80 md:w-96 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-[3rem] shadow-2xl shadow-purple-500/20 backdrop-blur-sm border border-white/10 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10">
                  <Image
                    src={rtl ? phonneAr : phonneFr}
                    alt="Depogro App"
                    layout="fill"
                    className="object-cover rounded-[2.5rem] transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Reflection Effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2.5rem] pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>


      {/* About Section */}
      <section id="about" className="relative py-20 p-10 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-600/3 to-purple-600/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container px-6 mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
             
            </motion.div>

            <h2 className="text-5xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              {t.about.title}
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              {t.about.desc}
            </p>
          </motion.div>

          {/* Content Layout */}
          <div
            className={`grid lg:grid-cols-2 ${rtl ? "lg:grid-flow-col-dense" : ""
              } gap-20 items-center`}
          >
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Main Image Container */}
              <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl"></div>

                {/* Image with Overlay */}
                <div className="absolute inset-6 rounded-2xl overflow-hidden">
                  <Image
                    src={vanDepo}
                    alt="DEPOGRO Mission"
                    layout="fill"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl -rotate-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl shadow-black/10 border border-white/20"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    95%
                  </div>
                  <div className="text-sm font-medium text-gray-600 mt-1">{t.header.Satisfaction}</div>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-8 right-8 bg-gradient-to-r from-[#D9CECE] to-[#8C8888]   text-white rounded-2xl p-6 shadow-2xl shadow-purple-500/25"
                >
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm font-medium text-white/90 mt-1">{t.header.ans}</div>
                </motion.div>
              </div>

              {/* Background Pattern */}
              <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-3xl transform rotate-2"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-8 ${rtl ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}
            >
              {/* Mission Title */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight"
                >
                  {t.about.mission}
                </motion.h3>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`w-24 h-1 bg-[#f37c50]  rounded-full mb-8 ${rtl ? "lg:ml-auto" : ""} ${rtl ? "lg:mr-0" : "lg:ml-0"} mx-auto lg:mx-0`}
                ></motion.div>
              </div>

              {/* Mission Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  {t.about.missionDesc}
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  {t.about.missionDesc2}
                </p>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12"
              >
                {[
                  { icon: "🚀", text: t.header.InnovationTechnologique },
                  { icon: "💎", text: t.header.PartnershipSolide },
                  { icon: "🤝", text: t.header.QualitéPremium },
                  { icon: "🌍", text: t.header.ImpactGlobal }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
                  >
                    <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-gray-800">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className={`pt-8 ${rtl ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}
              >

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 p-10 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
             
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              {t.services.title}
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Store className="h-8 w-8" />,
                title: t.services.service1.title,
                description: t.services.service1.dec,
                gradient: "from-purple-600 to-pink-600",
                color: "text-purple-600"
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: t.services.service2.title,
                description: t.services.service2.dec,
                gradient: "from-blue-600 to-purple-600",
                color: "text-blue-600"
              },
              {
                icon: <ShoppingBag className="h-8 w-8" />,
                title: t.services.service3.title,
                description: t.services.service3.dec,
                gradient: "from-green-600 to-blue-600",
                color: "text-green-600"
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: t.services.service4.title,
                description: t.services.service4.dec,
                gradient: "from-orange-600 to-pink-600",
                color: "text-orange-600"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  whileHover: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Service Card */}
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-xl shadow-gray-200/20 group-hover:shadow-2xl group-hover:shadow-purple-200/30 transition-all duration-500 overflow-hidden">
                  {/* Header with Gradient */}
                  <div className={`relative h-2 bg-gradient-to-r ${service.gradient}`}></div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-white border border-gray-200/50 shadow-lg"
                    >
                      <div className={service.color}>
                        {service.icon}
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                {t.MARKETPLACE.title}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              {t.MARKETPLACE.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              {t.MARKETPLACE.desc2}
            </p>
          </motion.div>

          {/* Content Layout */}
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${rtl ? "lg:grid-flow-col-dense" : ""}`}>
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Main Image Container */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl"></div>

                {/* Image with Overlay */}
                <div className="absolute inset-6 rounded-2xl overflow-hidden">
                  <Image
                    src={mark}
                    alt="DEPOGRO Marketplace"
                    layout="fill"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -rotate-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-8 ${rtl ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}
            >
              {/* Mission Title */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight"
                >
                  {t.MARKETPLACE.mission2}
                </motion.h3>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 ${rtl ? "lg:ml-auto" : ""} ${rtl ? "lg:mr-0" : "lg:ml-0"} mx-auto lg:mx-0`}
                ></motion.div>
              </div>

              {/* Mission Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  {t.MARKETPLACE.missionDesc3}
                </p>

                <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50">
                  <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light pl-4">
                    {t.MARKETPLACE.missionDesc4}
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className={`flex flex-col sm:flex-row gap-4 ${rtl ? "lg:justify-end" : ""} justify-center lg:justify-start`}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(true)}
                  className="px-8 py-4 bg-[#f37c50]  hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                >
                  {t.MARKETPLACE.learnMore}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open("http://markeplace.depogro.com/", "_blank")}
                  className="px-8 py-4 bg-white text-gray-900 border border-gray-300 hover:border-purple-600 hover:bg-purple-50 rounded-2xl font-semibold shadow-lg shadow-gray-200/20 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300"
                >
                  {t.MARKETPLACE.learnMoreSite}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden flex flex-col relative border border-white/20"
              >
                {/* Cover Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={mark}
                    alt="Marketplace Cover"
                    layout="fill"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl"></div>
                  <div className="absolute bottom-6 left-8">
                    <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                      {t.MARKETPLACE.title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-700 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
                  {/* Section 1: Description */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-900">{t.MARKETPLACE.mission2}</h4>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed font-light pl-11">
                      {t.MARKETPLACE.missionDesc3}
                    </p>
                  </motion.section>

                  {/* Section 2: Rôle du Marketplace */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-900">Rôle du Marketplace</h4>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed font-light pl-11">
                      {t.MARKETPLACE.role}
                    </p>
                  </motion.section>

                  {/* Section 3: Avantages */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-900">Avantages</h4>
                    </div>
                    <ul className="space-y-3 text-lg text-gray-700 pl-11">
                      {[
                        t.MARKETPLACE.avantage1,
                        t.MARKETPLACE.avantage2,
                        t.MARKETPLACE.avantage3,
                        t.MARKETPLACE.avantage4,
                        t.MARKETPLACE.avantage5
                      ].map((avantage, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="font-light">{avantage}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>











      {/* Produit Section */}
      <section id="produit" className="relative py-32 bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#3d2b63] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="container px-6 mx-auto relative z-10">
          <div className={`grid lg:grid-cols-3 ${rtl ? "lg:grid-flow-col-dense" : ""} gap-16 items-center`}>
            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-8 lg:col-span-1 ${rtl ? "lg:order-2" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg mb-6"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>

              </motion.div>

              <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight ${rtl ? "text-right" : ""}`}>
                {t.produit.title}
              </h2>
              <p className={`text-xl text-white/80 leading-relaxed font-light ${rtl ? "text-right" : ""}`}>
                {t.produit.description}
              </p>
            </motion.div>

            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative w-full h-[500px] lg:h-[700px] lg:col-span-1 flex justify-center items-center ${rtl ? "lg:order-1" : ""}`}
            >
              {/* Floating Container */}
              <div className="relative w-full h-full group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>

                {/* Main Image Container */}
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <Image
                    src={web2 || "/placeholder.svg"}
                    alt="Produit Depogro"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-700 ease-out group-hover:scale-110"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-12 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -rotate-12 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Stats/Features */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-6 lg:col-span-1 ${rtl ? "lg:order-0" : ""}`}
            >
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-purple-500/10 border border-white/20 hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500">
                  {/* Accent Bar */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-l-3xl"></div>

                  <div className="pl-6">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 ${rtl ? "text-right" : ""}`}>
                      {t.produit.stat1.title}
                    </h3>
                    <p className={`text-lg text-gray-700 leading-relaxed font-light ${rtl ? "text-right" : ""}`}>
                      {t.produit.stat1.content}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-500/10 border border-white/20 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500">
                  {/* Accent Bar */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-3xl"></div>

                  <div className="pl-6">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 ${rtl ? "text-right" : ""}`}>
                      {t.produit.stat2.title}
                    </h3>
                    <p className={`text-lg text-gray-700 leading-relaxed font-light ${rtl ? "text-right" : ""}`}>
                      {t.produit.stat2.content}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-pink-500/10 border border-white/20 hover:shadow-3xl hover:shadow-pink-500/20 transition-all duration-500">
                  {/* Accent Bar */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-600 to-orange-600 rounded-l-3xl"></div>

                  <div className="pl-6">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4 ${rtl ? "text-right" : ""}`}>
                      {t.produit.stat3.title}
                    </h3>
                    <p className={`text-lg text-gray-700 leading-relaxed font-light ${rtl ? "text-right" : ""}`}>
                      {t.produit.stat3.content}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* News & Media Section */}


      {/* New Marketplace Section */}
      <section id="marketplaceVideo" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                {t.Video.title}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              {t.Video.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              {t.Video.desc}
            </p>
          </motion.div>

          {/* Content Layout */}

        
           <div className={`grid lg:grid-cols-2 gap-16 items-center ${rtl ? "lg:grid-flow-col-dense" : ""}`}>
      {/* Video Section */}
    <motion.div
  initial={{ opacity: 0, x: rtl ? 20 : -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative group"
>
  {/* Video Container */}
  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20">

    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-lg transition-all duration-700"></div>

    {/* Video Iframe */}
    <div className="relative aspect-video rounded-2xl overflow-hidden">
      {play ? (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/nlfqlxvtk-Y?rel=0&modestbranding=1&autoplay=1"
          title="Dépogo - Présentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <motion.div
          className="w-full h-full cursor-pointer flex items-center justify-center bg-black/40"
          onClick={() => setPlay(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-0 h-0 border-l-[16px] border-l-purple-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
          </motion.div>
        </motion.div>
      )}
    </div>

    {/* Floating Elements */}
    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-12 opacity-20 transition-opacity duration-500 group-hover:opacity-30"></div>
    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -rotate-12 opacity-20 transition-opacity duration-500 group-hover:opacity-30"></div>
  </div>
</motion.div>


      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: rtl ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`space-y-8 ${rtl ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight"
        >
          {t.Video.mission2}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50">
            <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light pl-4 italic">
              {t.Video.missionDesc4}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
        </div>
      </section>




























      {/* Brands Section */}
      <BrandsCarousel brands={brands} t={t} />
      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-purple-50/30 overflow-hidden  p-10 ">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className={`grid lg:grid-cols-2 ${rtl ? "lg:grid-flow-col-dense" : ""} gap-16 items-start`}>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-8 ${rtl ? "lg:order-1" : ""}`}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>

                </motion.div>

                <h2 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight ${rtl ? "text-right" : ""}`}>
                  {t.contact.title}
                </h2>
                <p className={`text-xl text-gray-600 leading-relaxed font-light ${rtl ? "text-right" : ""}`}>
                  {t.contact.subtitle}
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Address */}
                <motion.div
                  whileHover={{ x: rtl ? -5 : 5 }}
                  className={`group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 ${rtl ? "text-right" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    {!rtl && (
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t.contact.address}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Rue du Parc, Ariana 2036, Tunisie
                      </p>
                    </div>
                    {rtl && (
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: rtl ? -5 : 5 }}
                  className={`group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 ${rtl ? "text-right" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    {!rtl && (
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t.contact.telephone}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        +216 56 444 000
                      </p>
                    </div>
                    {rtl && (
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: rtl ? -5 : 5 }}
                  className={`group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 ${rtl ? "text-right" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    {!rtl && (
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t.contact.email}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        contact@depogro.com
                      </p>
                    </div>
                    {rtl && (
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative ${rtl ? "lg:order-0" : ""}`}
            >
              {/* Form Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-purple-500/10 border border-gray-200/50">
                {/* Form Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center mb-8"
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-2">
                    {t.header.msg}
                  </h3>
                  <p className="text-gray-600">{t.header.reponse}</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-2"
                    >
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        {t.contact.form.firstName}
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder={t.contact.form.firstName}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="space-y-2"
                    >
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        {t.contact.form.lastName}
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder={t.contact.form.lastName}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      />
                    </motion.div>
                  </div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      {t.contact.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.contact.form.email}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      {t.contact.form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t.contact.form.message}
                      required
                      disabled={isSubmitting}
                      className="w-full min-h-[150px] px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
<Button
  type="submit"
  disabled={isSubmitting}
  className="w-full py-4 bg-[#f37c50] text-white hover:bg-gray-200 hover:text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
>
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {language === "fr" ? "Envoi en cours..." : "جاري الإرسال..."}
                        </div>
                      ) : (
                        t.contact.form.submit
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
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
