import React from "react"
import "./Layout.scss"

const Layout: React.FC = (props) => {
  const { children } = props
  return (
    <div className="layout">
      <div className="header">
        <div className="icon" />
        JAM DO LIST
      </div>
      {children}
    </div>
  )
}

export default Layout
