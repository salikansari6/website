import React, { FC } from 'react'
import FeatureCards from '../components/feature-card'
import { FeatureList } from '../shared/sample-data'

interface FeatureSectionProps {
  className?: string
}

const FeatureSection: FC<FeatureSectionProps> = ({ className }) => (
  <FeatureCards
    data={FeatureList}
    className={`${className} md:grid md:grid-rows-2 md:grid-flow-col block`}
  />
)

export default FeatureSection
