"use client";
import { Store, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

const navigation = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "produit", href: "#produit" },
  { name: "services", href: "#services" },
  { name: "news", href: "#news" },
  { name: "contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[language].nav as Record<string, string>;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.replace("#", ""));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#46276B] via-[#5D3C8C] to-[#EF7953] backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <div className="flex items-center space-x-2">
            <Link href="#home" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-white" />
              <span className="text-2xl font-semibold text-white tracking-wider">
                DEPOGRO
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-medium text-white transition-all duration-300 hover:text-[#EF7953] relative",
                  activeSection === item.href.replace("#", "")
                    ? "text-[#EF7953] font-semibold"
                    : "text-opacity-75"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setActiveSection(item.href.replace("#", ""));
                }}
              >
                {t[item.name]}
              </Link>
            ))}
          </div>

          {/* Language Selection and Hamburger */}
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage("fr")}
              className={cn(language === "fr" && "text-[#46276B]")}
            >
              Français
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage("ar")}
              className={cn(language === "ar" && "text-[#46276B]")}
            >
              العربية
            </Button>

            <button
              className="md:hidden p-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-[#46276B] transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden bg-gradient-to-r from-[#46276B] via-[#5D3C8C] to-[#EF7953] border-t"
          >
            <div className="container mx-auto px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsOpen(false);
                    setActiveSection(item.href.replace("#", ""));
                  }}
                  className={cn(
                    "block py-3 text-lg font-medium text-white transition-all duration-300 hover:text-[#46276B]",
                    activeSection === item.href.replace("#", "")
                      ? "text-[#46276B]"
                      : "text-opacity-75"
                  )}
                >
                  {t[item.name]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
