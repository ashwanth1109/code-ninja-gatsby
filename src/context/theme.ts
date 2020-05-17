import React from "react"
import { black, purple, white } from "../styles/colors"

export interface Theme {
  isDark: boolean
  primary: string
  text: string
  background: string
  backgroundAccent: string
  divider: string
}

export const themes: { [key: string]: Theme } = {
  light: {
    isDark: false,
    primary: purple,
    text: black.C100,
    background: white.C100,
    backgroundAccent: white.C80,
    divider: white.C90,
  },
  dark: {
    isDark: true,
    primary: purple,
    text: white.C80,
    background: black.C80,
    backgroundAccent: black.C60,
    divider: black.C60,
  },
}

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export default ThemeContext
