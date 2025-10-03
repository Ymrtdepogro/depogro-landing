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

export default function market() {
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
