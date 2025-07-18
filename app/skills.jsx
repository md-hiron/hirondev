export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-4 md:px-12 bg-gradient-to-b from-slateblack via-gunmetal to-charcoal text-white border-t-2 border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">My Skillset</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            A carefully curated toolbox of technologies I rely on to build full-stack, scalable, and creative web experiences.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Front-end Card */}
          <div className="flex-1 min-w-[280px] max-w-sm bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-cyan-600/10 transition" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Front-end</h3>
            <ul className="space-y-1 text-gray-300 text-sm font-mono pl-4">
              <li className="text-cyan-400 -ml-4">{'{'}</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Next.js</li>
              <li>GSAP & ScrollMagic</li>
              <li className="text-cyan-400 animate-blink">|</li>
              <li className="text-cyan-400 -ml-4">{'}'}</li>
            </ul>
          </div>

          {/* Back-end Card */}
          <div className="flex-1 min-w-[280px] max-w-sm bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-cyan-600/10 transition" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Back-end</h3>
            <ul className="space-y-1 text-gray-300 text-sm font-mono pl-4">
              <li className="text-cyan-400 -ml-4">{'{'}</li>
              <li>PHP</li>
              <li>PHP OOP</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Server Management</li>
              <li className="text-cyan-400 animate-blink">|</li>
              <li className="text-cyan-400 -ml-4">{'}'}</li>
            </ul>
          </div>

          {/* WordPress Card */}
          <div className="flex-1 min-w-[280px] max-w-sm bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-cyan-600/10 transition" data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">WordPress</h3>
            <ul className="space-y-1 text-gray-300 text-sm font-mono pl-4">
              <li className="text-cyan-400 -ml-4">{'{'}</li>
              <li>Custom Theme Development</li>
              <li>Custom Plugin Development</li>
              <li>Elementor Addon Development</li>
              <li>Divi Addon Development</li>
              <li>Block Theme Development</li>
              <li>Gutenberg Development</li>
              <li className="text-cyan-400 animate-blink">|</li>
              <li className="text-cyan-400 -ml-4">{'}'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
