import ParticlesBackground from './particles-background';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg-2.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-[#121417]/90 z-10" />

      {/* Particles Layer */}
      <div className="absolute inset-0 z-20">
        <ParticlesBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-30 max-w-4xl text-center px-4 pt-24 md:pt-32">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight glass-text">
          Hi, I'm Hiron — a Freelance Full-Stack Web Developer
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10">
          I help businesses build fast, modern websites using Next.js, Tailwind CSS, and WordPress. Let’s turn your idea into a scalable web experience.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300"
          >
            Let’s Work Together
          </a>
          <a
            href="https://www.upwork.com/freelancers/~019c9b67f5d8db9753"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition duration-300 shadow-md"
          >
            Upwork Profile
          </a>
        </div>
      </div>
    </section>
  );
}
