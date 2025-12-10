import { getAllPosts } from '@/app/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <h1>Next.js MDX Blog Boilerplate</h1>

      <ul>
        <li>
          <Link href='/mdx-page'>Go to MDX Page Example</Link>
        </li>
      </ul>

      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
