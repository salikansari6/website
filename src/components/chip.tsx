import React, { FC } from 'react'

export interface ChipProps {
  text: string
}

const Chip: FC<ChipProps> = ({ text }) => {
  return (
    <div className="bg-gray-50 border border-grey-200 rounded-3xl px-2 py-0.5 md:px-4 md:py-[6px] text-xsText md:text-body font-satoshi font-normal text-gray-600">
      {text}
    </div>
  )
}

export default Chip
