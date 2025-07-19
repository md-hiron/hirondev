export default function Projects() {
  const projects = [
    {
      title: 'WorldPTA',
      description: 'A Belgium-based business organization\'s website built using WordPress and ACF blocks.',
      link: 'https://worldpta.org/',
    },
    {
      title: 'Needtech Inc',
      description: 'A USA-based Digital tech agency\'s website built with WordPress and Elementor Custom addon',
      link: 'https://www.needtechinc.com/',
    },
    {
      title: 'Cities Global Project',
      description: 'A website for a book built with WordPress, GraphQL, Next js',
      link: 'https://www.citiesprojectglobal.com',
    },
    {
      title: 'Sitemap Generator',
      description: 'A custom plugin that generate custom sitemap for post and other custom post type',
      link: 'https://github.com/md-hiron/wp-sitemap-generator',
    },
    {
      title: 'Tasty swip',
      description: 'A WordPress plugin that allows users to like or dislike product items and recommends future products based on their preferences.',
      link: 'https://github.com/md-hiron/tasty',
    },
    {
      title: 'Woocommerce Product Addon',
      description: 'A WordPress plugin that allows admin to add product addons',
      link: 'https://github.com/md-hiron/wc-product-addon',
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
            Here are some of the works I've built — using modern stacks like Next.js, WordPress, PHP, and more.
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
