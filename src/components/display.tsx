import React from 'react'

interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string
  className?: string
}

const Display: React.FC<DisplayProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`font-inter text-3xl leading-lh6 md:text-5xl md:leading-lh8 lg:text-display lg:leading-lh9 ${className}`}
      {...props}>
      {children}
    </div>
  )
}

export default Display
