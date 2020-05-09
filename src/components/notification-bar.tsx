import React from "react"
import styled from "@emotion/styled"
import { purple, white } from "../styles/colors"

const Container = styled.div`
  width: 100%;
  height: 40px;
  background: ${purple.C70};
  color: ${white};
  a {
    color: white;
    text-shadow: none;
    text-decoration: underline;
    cursor: pointer;
  }
`

const NotificationBar = () => {
  return (
    <Container className="pad-h df a-center">
      <span>Check out the CodeNinja youtube channel&nbsp;</span>
      <a>here</a>
    </Container>
  )
}

export default NotificationBar
