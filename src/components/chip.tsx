import React, { FC } from 'react'

export interface ChipProps {
  text: string
  className?: string
}

const Chip: FC<ChipProps> = ({ text, className }) => {
  return (
    <div
      className={`${className}bg-gray-50 border border-grey-200 rounded-3xl text-xsText md:text-body font-satoshi font-normal text-gray-600`}
    >
      {text}
    </div>
  )
}

export default Chip
