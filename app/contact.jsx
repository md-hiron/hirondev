export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-4 md:px-12 text-white border-t-2 border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Let’s connect — whether it's a project idea, a freelance request, or just to say hello.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md space-y-4" data-aos="fade-right" data-aos-delay="100">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md space-y-6 text-sm text-gray-300" data-aos="fade-left" data-aos-delay="100">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-1">Address</h3>
              <p>Madinabag Mugda<br />Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-1">Phone</h3>
              <a href="tel:+88001633405363">+880 01633-405363</a>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-1">Email</h3>
              <a href="mailto:hironmd647@gmail.com">hironmd647@gmail.com</a>
            </div>
            <div className="pt-4 border-t border-white/10 text-sm text-gray-500">
              I'm available for freelance work, project collaborations, and consulting opportunities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
