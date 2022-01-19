import React, { FC } from 'react'

interface FeatureCardProps {
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
  <div className={`${className} flex flex-col p-6`}>
    <div className="gap-x-2">
      {icon || 'icon'}
      <div className="text-gray-800">{title}</div>
      <div className="">{text}</div>
    </div>
  </div>
)

export default FeatureCard
