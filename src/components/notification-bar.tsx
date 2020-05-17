import React, { useContext } from "react"
import styled from "@emotion/styled"
import { white } from "../styles/colors"
import ThemeContext from "../context/theme"

const Container = styled.div`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: ${white.C80};
  a {
    color: ${white.C100};
    text-shadow: none;
    text-decoration: underline;
    cursor: pointer;
  }
`

const NotificationBar = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container
      className="pad-h df a-center font-s bg-transition"
      style={{ background: theme.primary }}
    >
      <span>Check out the CodeNinja youtube channel&nbsp;</span>
      <a>here</a>
    </Container>
  )
}

export default NotificationBar
