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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section id="partners" className="py-24 section-bg-1">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 font-jakarta text-[#46276B]">
            {t.partners.title}
          </h2>
          <p className="text-lg text-gray-600">{t.partners.dec}</p>
        </motion.div>

        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-8">
              <div className="relative h-20 shadow-lg">
                <Image
                  src={brand.image || "/placeholder.svg"}
                  alt={`Partner ${brand.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
