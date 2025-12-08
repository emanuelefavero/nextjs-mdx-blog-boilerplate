import Link from 'next/link'

export default function Home() {
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
        <li>
          <Link href='/blog/welcome'>Welcome Post</Link>
        </li>
        <li>
          <Link href='/blog/about'>About Post</Link>
        </li>
      </ul>
    </>
  )
}
