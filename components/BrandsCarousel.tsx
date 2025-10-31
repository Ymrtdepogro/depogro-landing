"use client";

import type React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

interface Brand {
  id: number;
  name: string;
  image: string;
}

interface BrandsCarouselProps {
  brands: Brand[];
  t: {
    partners: {
      title: string;
      dec: string;
    };
  };
}

export const BrandsCarousel: React.FC<BrandsCarouselProps> = ({
  brands,
  t,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="partners" className="relative  bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
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

          <h2 className="text-4xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            {t.partners.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            {t.partners.dec}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <Slider {...settings}>
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-4"
              >
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-gray-200/20 border border-gray-200/50 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:scale-105">
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Brand Logo Container */}
                  <div className="relative h-24 flex items-center justify-center">
                    <Image
                      src={brand.image || "/placeholder.svg"}
                      alt={`Partner ${brand.name}`}
                      width={120}
                      height={60}
                      className="object-contain transform transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                      unoptimized
                    />
                  </div>

                  {/* Brand Name */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-4 text-sm font-semibold text-gray-600 group-hover:text-purple-600 transition-colors duration-300"
                  >
                    {brand.name}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

       
      </div>

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #9CA3AF;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: #7C3AED;
          opacity: 1;
        }
        .slick-track {
          display: flex !important;
          align-items: center;
        }
        .slick-slide {
          height: auto;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
};