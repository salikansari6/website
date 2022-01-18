import React, { useEffect, useState, FC } from 'react'
import { Disclosure } from '@headlessui/react'
import NavigationMenu from '../../components/NavigationMenu'
import NavigationBar from '../../components/NavigationBar'

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
      className={`${state.className} fixed w-screen z-[999]`}
    >
      {({ open }) => (
        <>
          <NavigationBar open={open} menuLinks={menuLinks} />
          <Disclosure.Panel className="sm:hidden bg-white">
            <NavigationMenu menuLinks={menuLinks} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
