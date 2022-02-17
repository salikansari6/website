import React, { FC } from 'react'
import PositionCard, { PositionCardProps } from '../components/position-card'
import OpeningsCTA from '../components/openings-cta'
import MainWrapper from '../components/main-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import Display from '../components/display'
import { openingsSectionClass } from '../styles'
interface OpeningsProps {
  openings: PositionCardProps[]
}

const Openings: FC<OpeningsProps> = ({ openings }) => {
  const { mainContainer, title, cardsContainer, cards, ctaSection } =
    openingsSectionClass
  return (
    <MainWrapper className={mainContainer}>
      <MaxWidthWrapper>
        <Display className={title}>Open Positions</Display>
        <MainWrapper className={cardsContainer}>
          {openings.map((x, index) => (
            <PositionCard
              key={index}
              title={x.title}
              tags={x.tags}
              url={x.url}
              className={cards}
            />
          ))}
        </MainWrapper>
        <OpeningsCTA className={ctaSection} />
      </MaxWidthWrapper>
    </MainWrapper>
  )
}

export default Openings
