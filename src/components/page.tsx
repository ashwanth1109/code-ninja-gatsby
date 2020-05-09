import React from "react"

const Page = ({ children }: { children: JSX.Element }) => {
  return <div className="pad-h flex">{children}</div>
}

export default Page
