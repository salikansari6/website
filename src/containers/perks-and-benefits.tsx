import React, { FC } from 'react'
import Display from '../components/display'
import MainWrapper from '../components/main-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import { perksAndBenefitsClass } from '../styles'
import Perk, { PerkProps } from '../components/perk'

export interface PerksAndBenefitsProps {
  perks: PerkProps[]
}

const PerksAndBenefits: FC<PerksAndBenefitsProps> = ({ perks }) => {
  const { mainContainer, title, perkList } = perksAndBenefitsClass
  return (
    <MainWrapper className={mainContainer}>
      <MaxWidthWrapper>
        <Display className={title}>Perks and Benefits</Display>
        <div className={perkList}>
          {perks.map((perk: PerkProps, index: React.Key | null | undefined) => (
            <Perk icon={perk.icon} text={perk.text} key={index} />
          ))}
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  )
}

export default PerksAndBenefits
