import React from 'react'
import Header, { MenuLink } from './header'
import Footer from './footer'

interface DefaultLayoutProps {
  children: React.ReactNode
  menuLinks: MenuLink[]
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  menuLinks
}) => {
  return (
    <>
      <Header menuLinks={menuLinks} />
      <div>{children}</div>
      <Footer menuLinks={menuLinks} />
    </>
  )
}

export default DefaultLayout
