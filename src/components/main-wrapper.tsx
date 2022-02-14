import React from 'react'
import { WrapperProps } from '../shared'

const MainWrapper = ({ children, className }: WrapperProps) => {
  return <div className={className}>{children}</div>
}

export default MainWrapper
