import React, { FC } from 'react'
import Display from '../components/display'
import MainWrapper from '../components/main-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import AdvantageCard, { AdvantageCardProps } from '../components/advantage-card'
import { advantagesSectionClass } from '../styles'
interface AdvantagesProps {
  advantages: AdvantageCardProps[]
}

const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  const { mainContainer, titleWrapper, title, advantageList } =
    advantagesSectionClass
  return (
    <MainWrapper className={mainContainer}>
      <MaxWidthWrapper>
        <MainWrapper className={titleWrapper}>
          <Display className={title}>
            You will have the advantage of working on a wide gamut of technology
            &#38; real-world problems.
          </Display>
        </MainWrapper>
        <div className={advantageList}>
          {advantages.map((advantage, index) => (
            <AdvantageCard
              text={advantage.text}
              borderColor={advantage.borderColor}
              backgroundColor={advantage.backgroundColor}
              image={advantage.image}
              key={index}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  )
}

export default Advantages
