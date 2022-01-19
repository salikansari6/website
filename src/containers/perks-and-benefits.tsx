import React, { FC } from 'react'
import Perk, { PerkProps } from '../components/perk'

export interface PerksAndBenefitsProps {
  perks: PerkProps[]
}

const PerksAndBenefits: FC<PerksAndBenefitsProps> = ({ perks }) => {
  return (
    <section className="mx-8 py-10 lg:pb-11 lg:mx-32 lg:pt-32">
      <p className="text-center self-center w-full text-4xl font-bold mb-10 lg:mb-20 text-gray-800">
        Perks and benefits
      </p>

      <div className="grid grid-cols-3 md:grid-cols-12 gap-x-4 gap-y-8 lg:gap-y-20">
        {perks.map((perk: PerkProps, index: React.Key | null | undefined) => (
          <Perk icon={perk.icon} text={perk.text} key={index} />
        ))}
      </div>
    </section>
  )
}

export default PerksAndBenefits
