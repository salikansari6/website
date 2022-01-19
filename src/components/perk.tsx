import React, { FC } from 'react'

export interface PerkProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string
  text: string
}

const Perk: FC<PerkProps> = ({ icon, text, ...props }) => {
  return (
    <div
      className="col-span-1 md:col-span-3 text-center flex flex-col items-center"
      {...props}
    >
      <img src={icon} alt="icon" className="mb-4 w-16 h-16 md:w-24 md:h-24" />
      <p className="text-gray-700 md:text-2xl leading-lh3 md:leading-lh5">
        {text}
      </p>
    </div>
  )
}

export default Perk
