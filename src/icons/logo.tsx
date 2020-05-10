import React from "react"

type Props = {
  primary: string
  accent: string
}

const Logo = ({ primary, accent }: Props) => {
  return (
    <svg viewBox="0 0 348 372" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M174 0L0.833984 61.752L27.246 290.718L174 372L320.754 290.718L347.166 61.752L174 0Z"
        fill={primary}
        style={{ transition: "0.5s ease-in-out fill" }}
      />
      <path
        d="M174 36V69.3V69.15V221.1V336L296.884 270.45L319 85.8L174 36Z"
        fill={accent}
        style={{ transition: "0.5s ease-in-out fill" }}
      />
    </svg>
  )
}

export default Logo
