import React, { FC } from 'react'
import FeatureCards from '../components/feature-card'
import Display from '../components/display'
import { FeatureList } from '../shared/sample-data'

interface FeatureSectionProps {
  className?: string
  rootClass?: string
}

const FeatureSection: FC<FeatureSectionProps> = ({ className, rootClass }) => (
  <section className={rootClass}>
    <Display className="md:px-28 px-12 md:pb-8 pb-4 text-gray-800 font-bold">
      What do we look forward to?
    </Display>
    <FeatureCards
      data={FeatureList}
      className={`${className} md:grid md:grid-rows-2 md:grid-flow-col block`}
    />
  </section>
)

export default FeatureSection
