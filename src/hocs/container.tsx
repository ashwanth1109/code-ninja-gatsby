import React from "react"
import { useTheme } from "../hooks/use-theme"
import ThemeContext from "../context/theme"
import Layout from "./layout"
import styled from "@emotion/styled"

type Props = {
  children: JSX.Element[] | JSX.Element
}

const PageSection = styled.div`
  max-width: 960px;
  margin: 8rem auto;
`

const Container = ({ children }: Props) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <PageSection>{children}</PageSection>
      </Layout>
    </ThemeContext.Provider>
  )
}

export default Container
