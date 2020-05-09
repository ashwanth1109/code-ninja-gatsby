import React from "react"
import Header from "../components/header"
import Sidenav from "../components/sidenav"
import Page from "../components/page"
import { useWindowSize, WindowSize } from "../hooks/use-window-size"

const Layout = ({ children }: { children: JSX.Element }) => {
  const size: WindowSize = useWindowSize()

  console.log(size)
  return (
    <div className="df col window-size no-overflow">
      <Header />
      <div className="df row flex">
        {size.width && size.width > 1000 && <Sidenav />}
        <Page>{children}</Page>
      </div>
    </div>
  )
}

export default Layout
