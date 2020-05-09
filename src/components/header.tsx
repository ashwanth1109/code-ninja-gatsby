import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  width: 100%;
  height: 64px;
  position: relative;
  &:after {
    background-color: #f0f0f2;
    bottom: 0rem;
    content: "";
    height: 1px;
    left: 0rem;
    position: absolute;
    right: 0rem;
    z-index: -1;
  }
`

const Header = () => {
  return <Container className="pad-h">Header</Container>
}

export default Header
