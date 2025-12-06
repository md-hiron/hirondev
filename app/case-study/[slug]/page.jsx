import { getAllPosts, getPostBySlug, getFeaturedImage } from "@/utils/api";
export function generateStaticParams() {
  return [
    { slug: "why-website-speed-matters-how-to-optimize-your-website" },
    { slug: "headless-wordpress-future-business-impression" },
    { slug: "bricks-builder-vs-elementor" },
  ];
}


export default async function SingleBlogPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="text-center text-white py-32">
        Post not found.
      </div>
    );
  }

  const seoTitle =
    post.acf?.seo_title || post.title?.rendered.replace(/<[^>]+>/g, "");

  const seoDescription =
    post.acf?.seo_description ||
    post.excerpt?.rendered.replace(/<[^>]+>/g, "");

  const ogTitle = post.acf?.seo_og_title || seoTitle;
  const ogDescription = post.acf?.seo_og_description || seoDescription;
  const featuredImage = getFeaturedImage(post);

  return (
    <>
      {/* SEO HEAD */}
      <head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />

        {/* OG Tags */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={`https://hirondev.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={featuredImage} />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: seoTitle,
              description: seoDescription,
              image: featuredImage,
              author: {
                "@type": "Person",
                name: "Md Hiron Mia",
              },
              publisher: {
                "@type": "Organization",
                name: "HironDev",
                logo: {
                  "@type": "ImageObject",
                  url: "https://hirondev.com/logo.png",
                },
              },
              datePublished: post.date,
              dateModified: post.modified,
              mainEntityOfPage: `https://hirondev.com/blog/${post.slug}`,
            }),
          }}
        />
      </head>

      {/* PAGE CONTENT */}
      <section className="pt-32 pb-24 px-4 md:px-12 bg-gradient-to-b from-[#121417] via-[#1A1A1A] to-[#121417] text-white min-h-screen border-t-2 border-white/10">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {featuredImage && (
            <img
              src={featuredImage}
              alt={post.title.rendered}
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded-xl mb-10 shadow-lg border border-white/10"
            />
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
            {post.title.rendered.replace(/<[^>]+>/g, "")}
          </h1>

          {/* Content */}
          <article
            className="prose blog-content prose-invert max-w-none prose-headings:text-cyan-400 prose-a:text-cyan-300 prose-strong:text-white prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></article>

          {/* Author Box */}
          <div 
            className="mt-16 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-cyan-600/10 transition-all"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-5">
              
              {/* Avatar */}
              <img 
                src="/hiron.webp"
                alt="Md Hiron Mia" 
                className="w-20 h-20 rounded-full border border-white/10 object-cover"
              />

              <div>
                {/* Name */}
                <h3 className="text-xl font-semibold text-cyan-400">
                  Md Hiron Mia
                </h3>

                {/* Bio */}
                <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                  Web Developer specializing in WordPress, Next.js, PHP, and fast modern websites. 
                  I create reliable, scalable, and SEO-optimized solutions for startups, businesses, and creators.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 mt-3 text-cyan-300">
                  <a 
                    href="https://github.com/md-hiron" 
                    target="_blank"
                    className="hover:text-cyan-400 transition"
                  >
                    GitHub
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/md-hiron-mia-872485214/" 
                    target="_blank"
                    className="hover:text-cyan-400 transition"
                  >
                    LinkedIn
                  </a>

                  <a 
                    href="mailto:hironmd647@gmail.com"
                    className="hover:text-cyan-400 transition"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* Back Button */}
          <div className="mt-16">
            <a
              href="/#case-study"
              className="inline-block bg-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400 transition"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
