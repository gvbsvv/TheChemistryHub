const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/, // Matches .md and .mdx files
  options: {
    remarkPlugins: [], // Add remark plugins here
    rehypePlugins: [], // Add rehype plugins here
    providerImportSource: '@mdx-js/react', // Important for MDX v2 and later
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Important: Include MD and MDX
  // ... other Next.js config options
});