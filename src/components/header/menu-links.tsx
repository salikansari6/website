import React from 'react'
import { Link } from 'gatsby'
import { MenuLink } from '.'

interface MenuLinksProps {
  className?: string
  menuLinks: MenuLink[]
}

const MenuLinks = ({ className = '', menuLinks }: MenuLinksProps) => {
  const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
    return isCurrent
      ? { className: `sm:border-b-2 sm:border-primary-500 ${className}` }
      : { className }
  }

  return (
    <>
      {menuLinks.map((menuLink: any, index: number) => (
        <Link
          to={menuLink.link}
          key={index}
          getProps={isActive}
          className={className}>
          <h5 className="text-gray-700 font-medium px-7 py-3">
            {menuLink.name}
          </h5>
        </Link>
      ))}
    </>
  )
}

export default MenuLinks
