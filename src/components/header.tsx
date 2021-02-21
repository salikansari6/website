import React from 'react'
import { IntrinsicProps } from '../shared/classes'

interface HeaderProps {
  title: string
  description: string
}

const Header = ({
  title,
  description,
  className
}: HeaderProps & IntrinsicProps) => (
  <div className={className}>
    <h1 className="text-4xl md:text-6xl text-gray-900 font-bold mb-1 md:mb-2">
      {title}
    </h1>
    <code className="text-lg md:text-2xl text-gray-600 font-thin">
      {description}
    </code>
  </div>
)

export default Header
