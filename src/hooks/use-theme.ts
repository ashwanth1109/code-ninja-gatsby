import { useState, useCallback, useLayoutEffect } from "react"
import { Theme, themes } from "../context/theme"

export interface ThemeControl {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): ThemeControl {
  const [theme, setTheme] = useState(
    localStorage.getItem("dark") === "true" ? themes.dark : themes.light
  )

  useLayoutEffect(() => {
    /* const val = localStorage.getItem("dark")
    if (val === "true") setTheme(themes.dark)*/
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark
    localStorage.setItem("dark", JSON.stringify(newTheme.isDark))
    setTheme(newTheme)
  }, [theme])

  return { theme, toggleTheme }
}
