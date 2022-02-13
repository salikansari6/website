import React from 'react'
import { WrapperProps } from '../shared/'

const HeroWrapper = ({ children, className }: WrapperProps) => {
  return <div className={className}>{children}</div>
}

export default HeroWrapper
