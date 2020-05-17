import React, { Fragment } from "react"
import styled from "@emotion/styled"

import Container from "../hocs/container"
import getFiles from "../graphql/get-files"
import PostItem from "../components/post-item"

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

const Index = () => {
  const data = getFiles()

  return (
    <Container>
      <Greeting>Hi.</Greeting>
      <Introduction>
        I'm Ashwanth - currently a software engineer at Crossover. Full-stack
        developer by day, and front-end developer by night. Typescript is my
        language of choice. <br />
        <br /> At work, I use Angular on the frontend and AWS cloud (Amplify,
        AppSync, DynamoDB, S3 etc.) for real-time serverless backends. Outside
        of work, I prefer to use React.
      </Introduction>
      <SectionTitle>Latest Posts</SectionTitle>
      <Fragment>
        {data.map(({ node }) => (
          <PostItem key={node.id} node={node} />
        ))}
      </Fragment>
    </Container>
  )
}

export default Index
