import React, { useContext } from "react"
import ThemeContext from "../context/theme"

const Page = ({ children }: { children: JSX.Element }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className="pad-h flex bg-transition"
      style={{ background: theme.background, color: theme.text }}
    >
      {children}
    </div>
  )
}

export default Page
