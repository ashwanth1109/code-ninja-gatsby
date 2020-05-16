import { graphql, useStaticQuery } from "gatsby"

const getMarkdownFiles = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            level
            title
            classification
            tags
          }
          excerpt
          html
          id
          tableOfContents
          timeToRead
        }
      }
    }
  `)

  return query.allMarkdownRemark.nodes
}

export default getMarkdownFiles
