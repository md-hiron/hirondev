export default function Service() {
  const services = [
    {
      title: "WordPress Website Setup",
      description:
        "Build or redesign your business site using Elementor or Bricks Builder. I can use your existing theme or recommend a lightweight one to keep your site fast and SEO-friendly.",
      rate: "💰 Starts from $200 or $20/hr",
      link: "#contact",
      delay: 100,
    },
    {
      title: "Custom WordPress Development",
      description:
        "Need something beyond templates? I develop custom themes and plugins for advanced features — tailored to your business needs while keeping speed and usability in mind.",
      rate: "💰 $20/hr",
      link: "#contact",
      delay: 150,
    },
    {
      title: "Next.js & Front-end Solutions",
      description:
        "I create high-performance landing pages, dashboards, and portfolios using Next.js and Tailwind CSS — ideal for modern businesses that value both design and performance.",
      rate: "💰 $20/hr",
      link: "#contact",
      delay: 200,
    },
    {
      title: "Website Maintenance",
      description:
        "Keep your site healthy and secure with regular updates, backups, and performance monitoring. Perfect for business owners who want peace of mind.",
      rate: "💰 Monthly packages or $20/hr",
      link: "#contact",
      delay: 250,
    },
    {
      title: "Website Troubleshooting",
      description:
        "Fix broken layouts, slow pages, or plugin errors quickly. I provide efficient debugging and recovery for WordPress and JavaScript-based sites.",
      rate: "💰 Starts from $50 per issue",
      link: "#contact",
      delay: 300,
    },
    {
      title: "Website Redesign",
      description:
        "Give your existing website a fresh, modern look while keeping your content and structure intact. Perfect for businesses that need an upgrade without starting over.",
      rate: "💰 Starts from $200 or $20/hr",
      link: "#contact",
      delay: 350,
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 py-24 px-4 md:px-12 bg-gradient-to-b from-[#121417] via-[#1A1A1A] to-[#121417] text-white border-t-2 border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Services I Offer
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I help individuals, startups, and small businesses build, improve, and maintain their
            websites. From quick WordPress builds to ongoing technical support, I make your online
            presence reliable and ready for growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-cyan-600/20 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-cyan-400 font-medium mb-4">{service.rate}</p>
              <a
                href={service.link}
                className="inline-block bg-cyan-500 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-cyan-400 transition"
              >
                Hire Me
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
