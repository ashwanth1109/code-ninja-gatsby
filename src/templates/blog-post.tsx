import React from "react"
import Container from "../hocs/container"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { Node } from "../types/node"

const Title = styled.h1`
  margin: 32px 0;
  font-size: 2.4rem;
`

const Body = styled.div`
  p {
    margin: 16px 0;
  }
  h3 {
    margin: 32px 0 16px 0;
    font-size: 1.6rem;
  }
`

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
      <Body dangerouslySetInnerHTML={{ __html: post.html }} />
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
