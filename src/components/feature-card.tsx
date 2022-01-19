import React, { FC } from 'react'

export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  text: string
  className?: string
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  text,
  className
}) => (
  <div className={className}>
    <div className="gap-x-2">
      {icon || 'icon'}
      <div className="text-gray-800 text-4xl font-bold leading-lh7 my-2">
        {title}
      </div>
      <div className="text-gray-600 text-2xl leading-lh7 my-2">{text}</div>
    </div>
  </div>
)

export default FeatureCard
