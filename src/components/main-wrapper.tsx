import React from 'react'
import { WrapperProps } from '../shared'

const MainWrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default MainWrapper
