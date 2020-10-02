import React, { Fragment } from "react"
import styled from "@emotion/styled"

import Container from "../hocs/container"
import PostItem from "../components/post-item"
import { graphql } from "gatsby"
import { Node } from "../types/node"

const Greeting = styled.div`
  font-size: 3rem;
  font-weight: 700;
`

const Introduction = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 16rem;
`

const SectionTitle = styled.h2`
  border-bottom: 1px solid #cbd5e0;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 1.25;
`

type Props = {
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: Array<{
        node: Node
      }>
    }
  }
}

const Index = ({ data }: Props) => {
  if (typeof window === "undefined") return null

  return (
    <Container>
      <Greeting>Hi.</Greeting>
      <Introduction>
        I'm Ashwanth - currently a software engineer at Crossover. Full-stack
        developer by day, and front-end developer by night. Typescript is my
        language of choice. <br />
        <br /> At work, I use Angular on the frontend and AWS cloud (Amplify,
        AppSync, Cloudformation, Cognito, DynamoDB, Lambda, S3 etc.) for
        real-time serverless backends and deploy pipelines. Outside of work, I
        prefer to use React.
      </Introduction>
      <SectionTitle>Latest Posts</SectionTitle>
      <Fragment>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem key={node.id} node={node} />
        ))}
      </Fragment>
    </Container>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            level
            classification
            tags
          }
          fields {
            slug
          }
          excerpt
          html
          id
          tableOfContents
          timeToRead
        }
      }
    }
  }
`

export default Index
