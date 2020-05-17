import React, { useContext } from "react"
import ThemeContext from "../context/theme"
import styled from "@emotion/styled"

const Container = styled.div`
  height: calc(100vh - 94px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`

const Page = ({ children }: { children: JSX.Element }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container
      className="pad-h flex"
      style={{
        background: theme.background,
        color: theme.text,
      }}
    >
      {children}
    </Container>
  )
}

export default Page
