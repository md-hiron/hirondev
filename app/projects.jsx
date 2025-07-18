export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio site built with Next.js and Tailwind.',
      link: 'https://github.com/your-username/portfolio',
    },
    {
      title: 'Custom WordPress Theme',
      description: 'Fully custom theme built for a client project.',
      link: 'https://yourclientsite.com',
    },
    {
      title: 'E-commerce App',
      description: 'React + MongoDB powered full-stack online store.',
      link: 'https://github.com/your-username/ecommerce-app',
    },
    {
      title: 'Elementor Addon',
      description: 'Custom addon widget built for Elementor plugin.',
      link: 'https://github.com/your-username/elementor-addon',
    },
    {
      title: 'GSAP Scroll Website',
      description: 'Landing page animated with GSAP + ScrollMagic.',
      link: 'https://yourgsappage.com',
    },
    {
      title: 'Blog CMS',
      description: 'Custom CMS built with PHP, MySQL, and Tailwind.',
      link: 'https://github.com/your-username/blog-cms',
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-4 md:px-12 bg-gradient-to-b from-[#121417] via-[#1A1A1A] to-[#121417] text-white border-t-2 border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Here are some of the works I've built — using modern stacks like Next.js, WordPress, GSAP, and more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div data-aos="fade-up" data-aos-delay={(index + 1) * 50}>
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-cyan-600/20 hover:scale-[1.02] transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-cyan-400 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              <p className="mt-4 text-sm text-cyan-300 group-hover:text-cyan-400">
                View Project →
              </p>
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
