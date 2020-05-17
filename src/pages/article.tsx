import React from "react"
import { graphql } from "gatsby"
import Container from "../hocs/container"

type Props = {
  data: any
}

const Article = ({ data }: Props) => {
  console.log(data)

  return (
    <Container>
      <div>Article</div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Article
