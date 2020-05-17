export interface Node {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    classification: string[]
    date: string
    level: number
    tags: string[]
  }
  html: string
  id: string
  tableOfContents: string
  timeToRead: number
}
