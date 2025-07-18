import ParticlesBackground from './particles-background';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg-2.jpg"
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
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight glass-text" data-aos="fade-up">
          Hi, I'm Hiron — Full-stack Web Developer
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10" data-aos="fade-up" data-aos-delay="100">
          I build modern, scalable web applications with Next.js, Tailwind CSS, and powerful backend integrations.
        </p>

        <div className="flex justify-center gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="200">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition duration-300 shadow-md"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300"
          >
            Upwork Profile
          </a>
        </div>
      </div>
    </section>
  );
}
