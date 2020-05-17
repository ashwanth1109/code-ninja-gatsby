import React from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import { Node } from "../types/node"
import ThemeContext from "../context/theme"
import { white } from "../styles/colors"

const PostTitle = styled.h3`
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1.625;
  font-weight: 400;
  :hover {
    text-decoration: underline;
  }
`

const Date = styled.span`
  font-size: 1.25rem;
  opacity: 0.75;
  display: inline-flex;
  align-items: flex-end;
`
const Tag = styled.span`
  display: inline-flex;
  align-items: flex-end;
  padding: 4px 8px;
  margin: 0 0 0 8px;
  border-radius: 4px;
  color: ${white.C80};
`

type Props = {
  node: Node
}

const PostItem = ({ node }: Props) => {
  const navigateToPage = async () => {
    await navigate(node.fields.slug)
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div>
          <div className="df">
            <PostTitle style={{ color: theme.text }} onClick={navigateToPage}>
              {node.frontmatter.title}
            </PostTitle>

            <div className="flex" />
            <span>{node.timeToRead} min</span>
          </div>
          <div className="df">
            <Date>{node.frontmatter.date}</Date>
            {node.frontmatter.tags.map((tag, id) => (
              <Tag key={id} style={{ background: theme.primary }}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default PostItem
