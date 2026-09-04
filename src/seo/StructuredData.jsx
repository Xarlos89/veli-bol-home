import { graph } from './schema.js'

// Rendered inside the app rather than hardcoded in index.html so the schema is
// generated from the page's own data. vite-react-ssg prerenders this into the
// static HTML, so crawlers get it without running any JavaScript.
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
