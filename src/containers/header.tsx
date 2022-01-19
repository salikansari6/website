import React, { useEffect, useState, FC } from 'react'
import { Disclosure } from '@headlessui/react'
import NavigationMenu from '../components/navigation-menu'
import NavigationBar from '../components/navigation-bar'

export interface MenuLink {
  name: string
  link: string
}

interface HeaderProps {
  menuLinks: MenuLink[]
}

const Header: FC<HeaderProps> = ({ menuLinks }) => {
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
      className={`${state.className} fixed w-screen z-[999] py-3`}
    >
      {({ open }) => (
        <>
          <NavigationBar
            open={open}
            menuLinks={menuLinks}
            className="mx-auto lg:px-8 px-6 py-3 md:py-0"
          />
          <Disclosure.Panel className="sm:hidden bg-white">
            <NavigationMenu
              menuLinks={menuLinks}
              className="py-4 block border-b-2"
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
