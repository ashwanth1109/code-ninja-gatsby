import React, { useContext } from "react"
import styled from "@emotion/styled"
import Logo from "../icons/logo"
import Search from "../icons/search"
import { purple, white } from "../styles/colors"
import ThemeButton from "./theme-button"
import ThemeContext from "../context/theme"

const Container = styled.div<{ divider: string }>`
  width: 100%;
  height: 64px;
  position: relative;
  &:after {
    background: ${props => props.divider};
    transition: 0.5s ease-in-out background;
    bottom: 0rem;
    content: "";
    height: 1px;
    left: 0rem;
    position: absolute;
    right: 0rem;
  }
`

const LogoContainer = styled.div`
  svg {
    height: 38px;
    margin-top: 4px;
  }
`

const Section = styled.div`
  position: relative;
  height: 100%;
  img {
    height: 80%;
  }

  h1 {
    font-size: 1rem;
    margin-left: 16px;
  }
`

const SearchBar = styled.input<{
  backgroundAccent: string
  text: string
  primary: string
}>`
  background: ${props => props.backgroundAccent};
  color: ${props => props.text};
  width: 100%;
  max-width: 400px;
  height: 40px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  line-height: 2.25rem;
  padding: 0 16px 0 40px;
  transition: 0.1s ease-in-out box-shadow, 0.5s ease-in-out background;

  :focus {
    -webkit-box-shadow: inset 0px 0px 0px 2px ${props => props.primary};
    -moz-box-shadow: inset 0px 0px 0px 2px ${props => props.primary};
    box-shadow: inset 0px 0px 0px 2px ${props => props.primary};
  }
`

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

const ThemeButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 16px;
`

const Header = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container
      className="pad-h df j-between bg-transition"
      style={{ backgroundColor: theme.background, color: theme.text }}
      divider={theme.divider}
    >
      <Section className="df a-center">
        <LogoContainer>
          <Logo
            primary={theme.isDark ? purple.C50 : purple.C70}
            accent={theme.isDark ? purple.C90 : white.C100}
          />
        </LogoContainer>
        <h1 className="font-s">Code Ninja</h1>
      </Section>
      <Section className="df a-center flex j-end">
        <SearchContainer className="relative">
          <IconContainer className="df a-center j-center">
            <Search fill={theme.text} />
          </IconContainer>
          <SearchBar
            type="text"
            placeholder="Search for posts"
            className="flex bg-transition"
            backgroundAccent={theme.backgroundAccent}
            text={theme.text}
            primary={theme.primary}
          />
        </SearchContainer>
        <ThemeButtonContainer className="df a-center j-center">
          <ThemeButton />
        </ThemeButtonContainer>
      </Section>
    </Container>
  )
}

export default Header
