import React from "react"
import styled from "@emotion/styled"
import Logo from "../../static/logo.png"
import Search from "../icons/search"
import { purple } from "../styles/colors"

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

const Section = styled.div`
  position: relative;
  height: 100%;
  img {
    height: 80%;
  }

  h1 {
    margin-left: 8px;
  }
`

const SearchBar = styled.input`
  background: whitesmoke;
  width: 100%;
  max-width: 400px;
  height: 40px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  line-height: 2.25rem;
  padding: 0 16px 0 40px;

  :focus {
    background: white;
    -webkit-box-shadow: inset 0px 0px 0px 2px ${purple.C40};
    -moz-box-shadow: inset 0px 0px 0px 2px ${purple.C40};
    box-shadow: inset 0px 0px 0px 2px ${purple.C40};
  }
`

const ThemeButton = styled.div``

const SearchContainer = styled.div`
  max-width: 400px;
  width: 100%;
`

const IconContainer = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 40px;

  svg {
    width: 16px;
    height: 16px;
  }
`

const Header = () => {
  return (
    <Container className="pad-h df j-between">
      <Section className="df a-center">
        <img src={Logo} alt="A dog smiling in a party hat" />
        <h1 className="font-s">Code Ninja</h1>
      </Section>
      <Section className="df a-center flex j-end">
        <SearchContainer className="relative">
          <IconContainer className="df a-center j-center">
            <Search />
          </IconContainer>
          <SearchBar
            type="text"
            placeholder="Search for tags"
            className="flex"
          />
        </SearchContainer>
        <ThemeButton />
      </Section>
    </Container>
  )
}

export default Header
