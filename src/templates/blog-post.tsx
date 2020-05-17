import React from "react"
import Container from "../hocs/container"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { Node } from "../types/node"

const Title = styled.div``

type Props = {
  data: {
    markdownRemark: Node
  }
}

const BlogPost = ({ data }: Props) => {
  const post = data.markdownRemark

  return (
    <Container>
      <div>Breadcrumb</div>
      <Title>{post.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

export default BlogPost
