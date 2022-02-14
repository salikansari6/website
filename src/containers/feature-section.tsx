import React, { FC } from 'react'
import FeatureCards from '../components/feature-card'
import Display from '../components/display'
import MainWrapper from '../components/main-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import { featureSectionClass } from '../styles'
import { FeatureList } from '../shared/sample-data'

const FeatureSection: FC = () => {
  const { mainContainer, title, featureList } = featureSectionClass
  return (
    <MainWrapper className={mainContainer}>
      <MaxWidthWrapper>
        <Display className={title}>What do we look forward to?</Display>
        <FeatureCards data={FeatureList} className={featureList} />
      </MaxWidthWrapper>
    </MainWrapper>
  )
}

export default FeatureSection
