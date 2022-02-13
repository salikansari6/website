import React from 'react'
import { WrapperProps } from '../shared/'

const MaxWidthWrapper = ({ children, className }: WrapperProps) => (
  <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>
)

export default MaxWidthWrapper
