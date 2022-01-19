import React, { FC } from 'react'
import { Link } from 'gatsby'
import { MenuLink } from '../containers/header'

interface NavigationMenuProps {
  className?: string
  menuLinks: MenuLink[]
}

const NavigationMenu: FC<NavigationMenuProps> = ({ className, menuLinks }) => {
  const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
    return isCurrent
      ? { className: `sm:border-b-2 sm:border-primary-500 ${className}` }
      : { className }
  }

  return (
    <>
      {menuLinks.map((menuLink: MenuLink, index: number) => (
        <Link
          to={menuLink.link}
          key={index}
          getProps={isActive}
          className={className}
        >
          <h5 className="text-gray-700 lg:text-2xl md:text-xl sm:text-body font-medium lg:px-7 px-4 py-3">
            {menuLink.name}
          </h5>
        </Link>
      ))}
    </>
  )
}

export default NavigationMenu
