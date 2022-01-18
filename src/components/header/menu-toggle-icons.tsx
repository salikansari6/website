import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '../../images'

interface MenuToggleIconsProps {
  open: boolean
}

const MenuToggleIcons = ({ open }: MenuToggleIconsProps) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <Disclosure.Button className="inline-flex items-center justify-center p-2">
        {open ? <XIcon /> : <MenuIcon />}
      </Disclosure.Button>
    </div>
  )
}

export default MenuToggleIcons
