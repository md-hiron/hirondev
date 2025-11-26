const WP_URL = 'https://blog.hirondev.com';

/**
 * Fetch all posts
 */
export async function getAllPosts(perPage = 3) {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/posts?per_page=${perPage}&_embed`
  );

  if (!res.ok) {
    console.error("Error fetching all posts:", res.statusText);
    return [];
  }

  return await res.json();
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug) {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  if (!res.ok) {
    console.error("Error fetching post by slug:", res.statusText);
    return null;
  }

  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

/**
 * 
 * @param {object} post 
 * @returns 
 */

export function getFeaturedImage(post) {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

