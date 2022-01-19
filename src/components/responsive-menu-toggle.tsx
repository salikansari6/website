import React, { FC } from 'react'
import { Disclosure } from '@headlessui/react'
import HamburgerMenu from '../assets/images/hamburger-menu.svg'
import Close from '../assets/images/close.svg'

interface ResponsiveMenuToggleProps {
  open: boolean
  className?: string
}

const ResponsiveMenuToggle: FC<ResponsiveMenuToggleProps> = ({
  open,
  className
}) => {
  return (
    <Disclosure.Button
      className={`${className} flex items-center justify-center sm:hidden`}
    >
      {open ? <Close /> : <HamburgerMenu />}
    </Disclosure.Button>
  )
}

export default ResponsiveMenuToggle
