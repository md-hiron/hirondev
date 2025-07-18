export default function AboutAnimatedContent() {

  return (
    <section id='about' className="py-20 border-t-2 border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-y-10">
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full flex justify-center items-center" data-aos="fade-right">
          <div
            className="max-w-100 max-h-100 rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          >
            <img
              src="/hiron.png"
              alt="Hiron's profile"
              className="w-full h-full object-cover grayscale-50 hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="lg:w-1/2 w-full" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Get to Know Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm a creative and detail-oriented web developer who loves turning ideas into clean, responsive digital experiences. With expertise in
            <span className="text-cyan-400 font-semibold"> Next.js</span>,
            <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>, and
            <span className="text-cyan-400 font-semibold"> WordPress</span>, I build websites that are both visually striking and technically robust.
          </p>
          <p className="text-gray-400 text-base">
            From crafting high-performance SPAs to customizing CMS-based platforms, I bridge the gap between modern JavaScript frameworks and the flexibility of WordPress.
            Whether you need a blazing-fast React site or a scalable WordPress backend, I’ve got you covered.
          </p>

          <div
            className="mt-8 bg-white/5 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow-inner"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">
              Technologies I Work With
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
              <li>Next.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>WordPress (Themes + Plugins)</li>
              <li>GSAP & ScrollMagic</li>
              <li>GraphQL</li>
              <li>REST APIs</li>
              <li>MySQL</li>
              <li>Server Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
