import React, { FC } from 'react'
import { Disclosure } from '@headlessui/react'
import HamburgerMenu from '../assets/images/hamburger-menu.svg'
import Close from '../assets/images/close.svg'

interface ResponsiveMenuToggleProps {
  open: boolean
}

const ResponsiveMenuToggle: FC<ResponsiveMenuToggleProps> = ({ open }) => {
  return (
    <Disclosure.Button className="flex items-center justify-center p-2 sm:hidden">
      {open ? <Close /> : <HamburgerMenu />}
    </Disclosure.Button>
  )
}

export default ResponsiveMenuToggle
