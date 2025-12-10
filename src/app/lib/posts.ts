export const posts = [
  { slug: 'about', title: 'About Post' },
  { slug: 'welcome', title: 'Welcome Post' },
  // TIP: Add your new posts here
]

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
