import type { MDXComponents } from 'mdx/types'

// TIP: Here you can add global styles and components for MDX files.
// @see https://nextjs.org/docs/app/guides/mdx#global-styles-and-components

const components: MDXComponents = {}

export function useMDXComponents(): MDXComponents {
  return components
}
