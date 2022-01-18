import React, { FC } from 'react'
import { Link } from 'gatsby'
import { MenuLink } from '../containers/header/Header'

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
          <h5 className="text-gray-700 font-medium md:px-6 md:py-6 sm:px-3 sm:py-3">
            {menuLink.name}
          </h5>
        </Link>
      ))}
    </>
  )
}

export default NavigationMenu
