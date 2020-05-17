import React, { useContext } from "react"
import styled from "@emotion/styled"
import ThemeContext from "../context/theme"

const Container = styled.div`
  width: 280px;
  max-width: 280px;
  position: relative;
`

const Sidenav = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container
      className="pad-h"
      style={{ background: theme.background, color: theme.text }}
    >
      Temp sidenav
    </Container>
  )
}

export default Sidenav
