import React, { FC } from 'react'
import PositionCard, { PositionCardProps } from '../components/position-card'
import OpeningsCTA from '../components/openings-cta'

interface OpeningsProps {
  openings: PositionCardProps[]
}

const Openings: FC<OpeningsProps> = ({ openings }) => {
  return (
    <div className="mx-8 py-10 lg:pb-11 lg:mx-32 lg:pt-32">
      <p className="text-center self-center w-full text-4xl font-bold mb-10 lg:mb-20 text-gray-800">
        Open Positions
      </p>
      <div className="flex flex-col gap-y-[18px] mb-36">
        {openings.map((x, index) => (
          <PositionCard
            key={index}
            title={x.title}
            tags={x.tags}
            url={x.url}
            className="py-2 px-4 md:px-8 md:py-4"
          />
        ))}
      </div>
      <OpeningsCTA className="p-6 md:p-10 mb-24" />
    </div>
  )
}

export default Openings
