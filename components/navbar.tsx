"use client";

import { Store, Menu, X, ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import depoo from "@/assets/depoo.png";

import { cn, isRTL } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { Language, translations } from "@/lib/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const navigation = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "marketplace", href: "#marketplace" },
  { name: "produit", href: "#produit" },
  { name: "news", href: "#news" },
  { name: "partners", href: "#partners" },
  { name: "contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const [activeSection, setActiveSection] = useState("home");

  const j = translations[language];
  const t = translations[language].nav as Record<string, string>;
  const rtl = isRTL(language);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      for (const item of navigation) {
        const section = item.href.replace("#", "");
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-lg shadow-gray-200/50 border-b border-gray-100"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-pink-600/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-3 relative">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={depoo}
                  alt="Store Icon"
                  width={28}
                  height={28}
                  className="relative z-10 object-contain w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>
              <span
                className={cn(
                  "text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-[#f37c50] bg-clip-text text-transparent"
                )}
              >
                DEPOGRO
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div 
                key={item.name} 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg",
                    activeSection === item.href.replace("#", "")
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  )}
                >
                  {t[item.name]}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg border border-purple-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 sm:px-6 sm:py-2.5 bg-[#f37c50] text-white rounded-lg sm:rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:from-purple-700 hover:to-pink-700 text-sm sm:text-base"
              onClick={() => window.open("https://marketplace.depogro.com/", "_blank")}
            >
              {j.MARKETPLACE.learnMoreSite}
            </motion.button>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="relative"
            >
              <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger className={cn(
                  "w-28 sm:w-32 bg-transparent border-none shadow-none focus:ring-0 text-gray-700 hover:text-purple-600"
                )}>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                    <SelectValue placeholder="Language" />
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 opacity-50" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl">
                  <SelectItem value="en">🇺🇸 English</SelectItem>
                  <SelectItem value="fr">🇫🇷 Français</SelectItem>
                  <SelectItem value="ar">🇸🇦 العربية</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Language Selector - Mobile */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="sm:hidden"
            >
              <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger className={cn(
                  "w-20 bg-transparent border-none shadow-none focus:ring-0 p-2 text-gray-700 hover:text-purple-600"
                )}>
                  <div className="flex items-center space-x-1">
                    <Globe className="h-3 w-3" />
                    <SelectValue placeholder="Lang" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl">
                  <SelectItem value="en">🇺🇸 EN</SelectItem>
                  <SelectItem value="fr">🇫🇷 FR</SelectItem>
                  <SelectItem value="ar">🇸🇦 AR</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Marketplace Button - Tablet */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex px-4 py-2 bg-[#f37c50] text-white rounded-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 text-sm"
              onClick={() => window.open("https://marketplace.depogro.com/", "_blank")}
            >
              {j.MARKETPLACE.learnMoreSite}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
              {/* Language Selector - Mobile Menu */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                  <SelectTrigger className="w-full max-w-xs bg-white border-gray-300">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <SelectValue placeholder="Language" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">🇺🇸 English</SelectItem>
                    <SelectItem value="fr">🇫🇷 Français</SelectItem>
                    <SelectItem value="ar">🇸🇦 العربية</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <motion.div 
                    key={item.name} 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base",
                        activeSection === item.href.replace("#", "")
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                          : "text-gray-700 hover:bg-gray-100/50"
                      )}
                    >
                      {t[item.name]}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Marketplace Button - Mobile Menu */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full mt-4 sm:mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 text-sm sm:text-base"
                onClick={() => {
                  window.open("https://marketplace.depogro.com/", "_blank");
                  setIsOpen(false);
                }}
              >
                {j.MARKETPLACE.learnMoreSite}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}