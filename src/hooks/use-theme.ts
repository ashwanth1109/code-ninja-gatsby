import { useState, useCallback, useLayoutEffect } from "react"
import { Theme, themes } from "../context/theme"

export interface ThemeControl {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): ThemeControl {
  const [theme, setTheme] = useState(themes.dark)

  useLayoutEffect(() => {
    const val = localStorage.getItem("dark")
    if (val === "false") setTheme(themes.light)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark
    localStorage.setItem("dark", JSON.stringify(newTheme.isDark))
    setTheme(newTheme)
  }, [theme])

  return { theme, toggleTheme }
}
