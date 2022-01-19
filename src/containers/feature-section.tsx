import React, { FC } from 'react'
import FeatureCard, { FeatureCardProps } from '../components/feature-card'

interface FeatureSectionProps {
  data: FeatureCardProps[]
  className: string
}

const FeatureSection: FC<FeatureSectionProps> = ({ data, className }) => (
  <div className={`${className}`}>
    {data.map(({ icon, title, text }: FeatureCardProps, index: number) => (
      <FeatureCard
        key={index}
        text={text}
        icon={icon}
        title={title}
        className="flex flex-col p-6"
      />
    ))}
  </div>
)

export default FeatureSection
