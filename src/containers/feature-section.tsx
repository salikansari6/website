import React, { FC } from 'react'
import FeatureCards from '../components/feature-card'
import { FeatureList } from '../shared/sample-data'

const FeatureSection: FC = () => (
  <FeatureCards
    data={FeatureList}
    className="md:grid md:grid-rows-2 md:grid-flow-col block md:px-28 px-8"
  />
)

export default FeatureSection
