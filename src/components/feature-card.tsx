import React, { FC } from 'react'

export interface FeatureCardProps {
  icon: string
  title: string
  text: string
}
interface FeatureCardsProps {
  data: FeatureCardProps[]
  className?: string
}

const FeatureCards: FC<FeatureCardsProps> = ({ data, className }) => (
  <div className={className}>
    {data.map(({ icon, title, text }: FeatureCardProps, index: number) => (
      <div className="flex flex-col p-6" key={index}>
        <div className="gap-x-2">
          <img
            src={icon}
            alt="icon"
            className="mb-4 w-16 h-16 md:w-24 md:h-24"
          />
          <div className="text-gray-800 text-4xl font-bold leading-lh7 my-2">
            {title}
          </div>
          <div className="text-gray-600 text-2xl leading-lh7 my-2">{text}</div>
        </div>
      </div>
    ))}
  </div>
)

export default FeatureCards
