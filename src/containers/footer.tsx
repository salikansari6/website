import React, { FC } from 'react'
import FooterMenu from '../components/footer-menu'
import SocialIcons from '../components/social-icons'
import Logo from '../assets/images/logo-white.svg'
import Github from '../assets/images/github.svg'
import { MenuLink } from '../containers/header'

export interface FooterProps {
  menuLinks: MenuLink[]
}

const socialLinks = [
  {
    icon: <Github />,
    url: 'https://github.com/raveracker',
    tooltip: 'Github'
  },
  {
    icon: <Github />,
    url: 'https://github.com/raveracker',
    tooltip: 'Github'
  },
  {
    icon: <Github />,
    url: 'https://github.com/raveracker',
    tooltip: 'Github'
  },
  {
    icon: <Github />,
    url: 'https://github.com/raveracker',
    tooltip: 'Github'
  }
]

const Footer: FC<FooterProps> = ({ menuLinks }) => {
  return (
    <div className="bg-info-900">
      <div className="container flex flex-col items-center gap-4 py-10">
        <Logo height="32" width="130" className="h-8 w-[8.5rem]" />
        <FooterMenu menuLinks={menuLinks} />
        <SocialIcons items={socialLinks} />
      </div>
    </div>
  )
}

export default Footer
