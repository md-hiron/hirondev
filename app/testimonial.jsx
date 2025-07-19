'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Agoura, United States',
      feedback: 'Great work product and great communication. I would definitely recommend him to others. Thank you MD Hiron for your help on this project.',
      rating: 5,
    },
    {
      name: 'Tom Gal, Israel',
      feedback: 'He\'s a highly professional developer who delivers quality work quickly and efficiently. His speed and expertise have been a great asset to our projects!',
      rating: 5,
    },
    {
      name: 'Ashis, India',
      feedback: 'I have worked with Hiron multiple times and he has never disappointed me..Highly recommended for frontend development!',
      rating: 5,
    },
    {
      name: 'Virginia, United States',
      feedback: 'Excellent developer - completed work on time, gave weekly updates on progress, and transition of work to live environment was seamless. Would absolutely hire again',
      rating: 5,
    },
    {
      name: 'Kanata, Canada',
      feedback: 'One of very few freelancers I have worked with who went the extra mile to ensure the work was done well. He promptly responds to messages, is polite, collaborative and is a very good web developer.',
      rating: 5,
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
              <p className="text-gray-200 mb-6 leading-relaxed pt-8 flex-1">
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
