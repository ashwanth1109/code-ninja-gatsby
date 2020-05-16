import React from "react"
import getMarkdownFiles from "../graphql/get-markdown-files"
import styled from "@emotion/styled"

const Container = styled.div`
  max-width: 960px;
  margin: 8rem auto;
`

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

const PostTitle = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1.625;
  :hover {
    text-decoration: underline;
  }
`

const Date = styled.span`
  font-size: 1.25rem;
  opacity: 0.75;
`

const PostContainer = styled.div``

const Home = () => {
  const markdownFiles = getMarkdownFiles()

  console.log({ markdownFiles })

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
      {markdownFiles.map((file: any) => (
        <PostContainer>
          <div className="df">
            <PostTitle>{file.frontmatter.title}</PostTitle>
            <div className="flex" />
            <span>{file.timeToRead} min</span>
          </div>
          <div className="df">
            <Date>{file.frontmatter.date}</Date>
          </div>
        </PostContainer>
      ))}
    </Container>
  )
}

export default Home
