import React, { useCallback, useState } from "react"
import Layout from "../hocs/layout"
import Home from "./home"
import ThemeContext, { themes } from "../context/theme"

const Index = () => {
  const [theme, setTheme] = useState(themes.dark)

  const toggleTheme = useCallback(() => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Home />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default Index
