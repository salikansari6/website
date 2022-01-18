import React, { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import MenuLinks from './menu-links'
import NavBar from './nav-bar'

export interface MenuLink {
  name: string
  link: string
}

interface HeaderProps {
  menuLinks: MenuLink[]
}

const Header = ({ menuLinks }: HeaderProps) => {
  const [state, setState] = useState({
    className: 'bg-transparent'
  })

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setState({ className: 'bg-white shadow-lg' })
    } else {
      setState({ className: 'bg-transparent' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure
      as="nav"
      className={`${state.className} fixed w-screen z-[999] animated`}
    >
      {({ open }) => (
        <>
          <NavBar open={open} menuLinks={menuLinks} />
          <Disclosure.Panel className="sm:hidden bg-white">
            <div className="px-2 pt-2 pb-3">
              <MenuLinks
                className="py-3 block border-b-2"
                menuLinks={menuLinks}
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
