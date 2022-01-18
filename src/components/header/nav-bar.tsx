import React from 'react'
import { Link } from 'gatsby'
import { Logo } from '../../images'
import MenuLinks from './menu-links'
import MenuToggleIcons from './menu-toggle-icons'
import ThemeToggle from './theme-toggle'
import { MenuLink } from '.'

interface NavBarProps {
  open: boolean
  menuLinks: MenuLink[]
}

const NavBar = ({ open, menuLinks }: NavBarProps) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <MenuToggleIcons open={open} />
        <div className="flex-1 flex items-center justify-center sm:justify-between sm:items-start">
          <div className="flex-shrink-0 flex items-center">
            <Logo width="244" height="58" />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex">
              <MenuLinks menuLinks={menuLinks} />
              <Link to="/" className="py-3 px-2">
                <h6 className="text-success-900 bg-success-200 rounded-lg px-2 py-1 font-medium">
                  We are hiring !
                </h6>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
