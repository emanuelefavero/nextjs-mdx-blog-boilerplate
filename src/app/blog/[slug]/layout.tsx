// TIP: Here you can customize the style of your blog posts with tailwindcss/typography
// @see https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#installation
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white'>
      {children}
    </div>
  )
}
