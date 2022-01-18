import React, { FC } from 'react'
import { Link } from 'gatsby'
import NavigationMenu from './NavigationMenu'
import ResponsiveMenuToggle from './ResponsiveMenuToggle'
import ThemeToggle from './ToggleTheme'
import { MenuLink } from '../containers/header/Header'
import ProcedureLogo from '../assets/images/logo.svg'

interface NavigationBarProps {
  open: boolean
  menuLinks: MenuLink[]
}

const NavigationBar: FC<NavigationBarProps> = ({ open, menuLinks }) => {
  return (
    <div className="max-w-7xl mx-auto lg:px-8 px-6 py-4">
      <div className="grid grid-flow-col">
        <div className="grid-cols-2 md:hidden">
          <ResponsiveMenuToggle open={open} />
        </div>
        <div className="grid-cols-10 md:grid-cols-4 sm:py-0.5">
          <ProcedureLogo
            width="168"
            height="40"
            className="w-[10.5rem] h-[2.5rem] md:w-[15.2rem] md:h-[3.6rem]"
          />
        </div>
        <div className="hidden sm:grid grid-flow-col place-content-center">
          <NavigationMenu menuLinks={menuLinks} />
          <Link to="/" className="py-3 px-2 flex justify-center items-center">
            <h6 className="text-success-900 bg-success-200 rounded-lg px-2 py-1 font-medium ">
              We are hiring !
            </h6>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
