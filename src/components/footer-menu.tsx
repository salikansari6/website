import React, { FC } from 'react'
import { Link } from 'gatsby'
import { MenuLink } from '../containers/header'

interface FooterMenuProps {
  className?: string
  menuLinks: MenuLink[]
}

const FooterMenu: FC<FooterMenuProps> = ({ className, menuLinks }) => (
  <div
    className={`${className} flex gap-8 md:gap-12 justify-center items-center`}
  >
    {menuLinks.map((menuLink: MenuLink, index: number) => (
      <Link
        key={index}
        to={menuLink.link}
        className="cursor-pointer hover:opacity-80 text-info-50"
      >
        <div className="cursor-pointer hover:opacity-80">{menuLink.name}</div>
      </Link>
    ))}
  </div>
)

export default FooterMenu
