import { graphql, useStaticQuery } from "gatsby"

const getArticle = () => {
  const query = useStaticQuery(graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `)

  return query.markdownRemark
}

export default getArticle
