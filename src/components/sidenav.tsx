import React, { useContext } from "react"
import styled from "@emotion/styled"
import ThemeContext from "../context/theme"

const Container = styled.div`
  width: 280px;
  max-width: 280px;
  position: relative;
  &:after {
    background-color: #f0f0f2;
    bottom: 0rem;
    content: "";
    width: 1px;
    top: 0rem;
    position: absolute;
    right: 0rem;
    z-index: -1;
  }
`

const Sidenav = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container
      className="pad-h"
      style={{ background: theme.background, color: theme.text }}
    >
      Sidenav
    </Container>
  )
}

export default Sidenav
