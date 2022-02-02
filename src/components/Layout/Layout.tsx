import React from 'react'
import './Layout.scss'

interface LayoutProps {
  children: React.ReactNode
  isMainPage?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, isMainPage } = props

  return (
    <div className="layout">
      <div className="header">
        <div className="icon" />
        JAM DO LIST
      </div>
      {isMainPage && (
        <>
          <div className="alarm-button">알림</div>
          <div className="logout-button">로그아웃</div>
        </>
      )}
      {children}
    </div>
  )
}

export default Layout
