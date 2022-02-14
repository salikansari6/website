import React from 'react'
import MainWrapper from '../components/main-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import Display from '../components/display'
import PolaroidList from '../components/polaroid-list'
import { ourTeamClass } from '../styles'
import { polaroidData } from '../shared/sample-data'

const OurTeam = () => {
  const {
    teamContainer,
    heading,
    paragraphContainer,
    paragraph,
    polaroidList
  } = ourTeamClass
  return (
    <MainWrapper className={teamContainer}>
      <MaxWidthWrapper>
        <Display className={heading}>Our team is a mixed bag</Display>
        <div className={paragraphContainer}>
          <h4 className={paragraph}>
            Of the smart and the hard-workers. Of the organized and slightly
            chaotic. Of the early risers and the burners of the midnight oil. We
            appreciate diversity and truly like having differing perspectives in
            the room. We pride ourselves on being early adopters of the latest
            tools, libraries, and frameworks while delivering business value all
            the time. We have fallen in love with our craft. and coffee.
          </h4>
        </div>
      </MaxWidthWrapper>
      <PolaroidList polaroidData={polaroidData} className={polaroidList} />
    </MainWrapper>
  )
}

export default OurTeam
