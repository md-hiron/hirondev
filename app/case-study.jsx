import { getAllPosts, getFeaturedImage } from '../utils/api';

export default async function CaseStudy() {
    const rawPosts = await getAllPosts(3);

    const posts = rawPosts.map((p) => ({
        slug: p.slug,
        title: p.title.rendered.replace(/<[^>]+>/g, ""),
        excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ""),
        featuredImage: getFeaturedImage(p),
    }));


  return (
    <section
      id="case-study"
      className="relative z-10 py-24 px-4 md:px-12 bg-gradient-to-b from-[#121417] via-[#1A1A1A] to-[#121417] text-white border-t-2 border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Latest Case study
          </h2>

          <p
            className="text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I write about WordPress, Next.js, PHP, performance, modern
            development workflows, and real case studies. Here are my latest
            articles.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 50}
            >
              <a
                href={`/case-study/${post.slug}`}
                className="block bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-cyan-600/20 hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Featured Image */}
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-5"
                  />
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-cyan-400 group-hover:underline">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <p className="mt-4 text-sm text-cyan-300 group-hover:text-cyan-400">
                  Read Article →
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <a
            href="/blog"
            data-aos="fade-up"
            className="inline-block bg-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400 transition"
          >
            View All Case Studies
          </a>
        </div> */}
      </div>
    </section>
  );
}
