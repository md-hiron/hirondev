'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Hiron was amazing to work with. He delivered exactly what I needed, and faster than expected.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      feedback: 'Professional, fast, and pixel-perfect delivery. Highly recommended for any WordPress or Next.js project.',
      rating: 4,
    },
    {
      name: 'Carlos Rivera',
      feedback: 'Great communication and top-quality code. Looking forward to working again!',
      rating: 5,
    },
    {
      name: 'Emily Stone',
      feedback: 'Incredible attention to detail and smooth delivery. Our site runs beautifully.',
      rating: 5,
    },
    {
      name: 'Omar Khan',
      feedback: 'Very knowledgeable in both frontend and backend. Would hire again.',
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative z-10 py-20 px-4 md:px-12 text-white border-t-2 border-white/10"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">What Clients Say</h2>
        <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Testimonials from Upwork and beyond — shared with trust and appreciation.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="max-w-7xl mx-auto"
        data-aos="fade-up" data-aos-delay="150"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex flex-col justify-between min-h-[250px] bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-left">
              {/* Upwork Logo */}
              <Image
                src="/upwork.png"
                alt="Upwork"
                width={150}
                height={150}
                className="absolute top-4 right-4 opacity-20"
              />

              {/* Feedback */}
              <p className="text-gray-200 text-sm mb-6 leading-relaxed pt-8 flex-1">
                “{item.feedback}”
              </p>

              {/* Name & Rating Block */}
              <div>
                <div className="text-sm text-gray-400 font-medium">— {item.name}</div>
                <div className="flex mt-2 space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < item.rating ? 'text-yellow-400' : 'text-gray-600'}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
