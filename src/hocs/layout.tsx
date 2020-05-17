import React from "react"
import Header from "../components/header"
import Page from "../components/page"
import NotificationBar from "../components/notification-bar"

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="df col window-size no-overflow">
      <NotificationBar />
      <Header />
      <div className="df row flex">
        <Page>{children}</Page>
      </div>
    </div>
  )
}

export default Layout
