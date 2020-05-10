import React from "react"
import { black, purple, white } from "../styles/colors"

export const themes = {
  light: {
    isDark: false,
    primary: purple.C70,
    text: black.C100,
    background: white.C100,
    backgroundAccent: white.C80,
    divider: white.C90,
    accent: purple.C70,
    notification: purple.C70,
  },
  dark: {
    isDark: true,
    primary: purple.C40,
    text: white.C80,
    background: black.C80,
    backgroundAccent: black.C60,
    divider: black.C60,
    accent: purple.C90,
    notification: purple.C50,
  },
}

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export default ThemeContext
