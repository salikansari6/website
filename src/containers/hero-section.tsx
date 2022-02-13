import React from 'react'
import { Link } from 'gatsby'
import RocketIcon from '../assets/images/rocket-icon.svg'
import BuildingTeam from '../assets/images/building-team.svg'
import HeroWrapper from '../components/hero-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import { heroSectionClass } from '../styles'

const HeroSection = () => {
  const {
    heroSectionWrapper,
    heroSectionGrid,
    leftGridItemContainer,
    leftHeading,
    leftHeadingSpan,
    leftSubHeading,
    buttonContainer,
    button,
    buttonText,
    image
  } = heroSectionClass
  return (
    <HeroWrapper className={heroSectionWrapper}>
      <MaxWidthWrapper className={heroSectionGrid}>
        <div className={leftGridItemContainer}>
          <h3 className={leftHeading}>
            <span className={leftHeadingSpan}>OK Google ! </span>
            <span className={leftHeadingSpan}>Show me, my next team</span>
          </h3>
          <h4 className={leftSubHeading}>
            We build small and performant teams while continuing to play with
            new stacks without little or heads up.
          </h4>
          <div className={buttonContainer}>
            <Link to="/" className={button}>
              <RocketIcon /> <span className={buttonText}>Open Positions</span>
            </Link>
          </div>
        </div>
        <div className={leftGridItemContainer}>
          <BuildingTeam className={image} />
        </div>
      </MaxWidthWrapper>
    </HeroWrapper>
  )
}

export default HeroSection
