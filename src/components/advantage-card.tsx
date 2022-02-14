import React, { FC } from 'react'

export interface AdvantageCardProps {
  text: string
  borderColor: string
  backgroundColor: string
  image: string
}

const AdvantageCard: FC<AdvantageCardProps> = ({
  text,
  borderColor,
  backgroundColor,
  image
}) => {
  return (
    <div className="grid relative col-span-4 grid-cols-4 px-4 md:px-6 pb-10 pt-[46px] md:pb-12 md:pt-[72px] border shadow-md bg-white border-gray-200 rounded-2xl">
      <div className="w-full absolute -top-[50px] inset-x-0 col-span-2 col-start-2 col-end-4 place-items-center items-center">
        <div
          className={`w-max border-2 rounded-lg p-3.5 md:p-6 m-auto ${backgroundColor} ${borderColor} `}
        >
          <img src={image} alt="icon" className="w-fit h-fit" />
        </div>
      </div>
      <p className="col-span-4 text-body leading-lh3 md:text-xl md:leading-lh4 font-normal text-gray-500 text-center">
        {text}
      </p>
    </div>
  )
}

export default AdvantageCard
