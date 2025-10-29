"use client";
import { Store, Menu, X, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
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
  { name: "marketplace", href: "#marketplace" },
  { name: "about", href: "#about" },
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rtl = isRTL(language);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-gray-100/20"
          : "bg-transparent"
      )}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-pink-600/5 pointer-events-none" />

      <div className="container mx-auto px-6 py-3 relative">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link
              href="#home"
              className="flex items-center space-x-3 group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("home");
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
               
<Image
  src={depoo}
  alt="Store Icon"
  width={32}
  height={32}
  className="relative z-10 object-contain"
/>

              </div>
              <span className={cn(
                "text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                isScrolled ? "text-gray-900" : "text-gray-700 hover:text-purple-600"
              )}>
                DEPOGRO
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 ">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group",
                    isScrolled
                      ? activeSection === item.href.replace("#", "")
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                      : activeSection === item.href.replace("#", "")
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
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
                  {/* Active Indicator */}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg border border-purple-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Marketplace Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-[#f37c50] text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.open("http://markeplace.depogro.com/", "_blank")}
            >
              {j.MARKETPLACE.learnMoreSite}
            </motion.button>

            {/* Language Selector */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <Select
                value={language}
                onValueChange={(value) => setLanguage(value as Language)}
              >
                <SelectTrigger className={cn(
                  "w-32 bg-transparent border-none shadow-none focus:ring-0",
                  isScrolled ? "text-gray-700" : "text-gray-700 hover:text-purple-600"
                )}>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <SelectValue placeholder="Language" />
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl">
                  <SelectItem value="en" className="flex items-center space-x-2">
                    <span>🇺🇸 English</span>
                  </SelectItem>
                  <SelectItem value="fr" className="flex items-center space-x-2">
                    <span>🇫🇷 Français</span>
                  </SelectItem>
                  <SelectItem value="ar" className="flex items-center space-x-2">
                    <span>🇸🇦 العربية</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
          
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "lg:hidden p-3 rounded-xl border transition-all duration-300",
              isScrolled
                ? "bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white"
                : "bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 hover:text-purple-600 hover:bg-white/20"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6">
              {/* Language Switcher */}
              <div className="flex justify-center mb-6">
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value as Language)}
                >
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
                    <Link
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
                        "block px-4 py-3 rounded-xl font-medium transition-all duration-300",
                        activeSection === item.href.replace("#", "")
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                          : "text-gray-700 hover:bg-gray-100/50"
                      )}
                    >
                      {t[item.name]}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Marketplace Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                onClick={() => {
                  window.open("http://markeplace.depogro.com/", "_blank");
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