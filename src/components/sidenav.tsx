import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  width: 280px;
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
  return <Container className="pad-h">Sidenav</Container>
}

export default Sidenav
