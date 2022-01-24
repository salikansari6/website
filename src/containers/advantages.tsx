import React, { FC } from 'react'
import AdvantageCard, { AdvantageCardProps } from '../components/advantage-card'
interface AdvantagesProps {
  advantages: AdvantageCardProps[]
}

const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <section className="px-8 py-10 md:pb-16 md:px-32 md:pt-3 ">
      <p className="col-span-full text-center font-inter font-bold text-3xl md:text-[44px] text-gray-600 mb-20 md:mb-[120px]">
        You will have the advantage of working on a <br />
        <span className="text-gray-800">
          wide gamut of technology & real-world problems.
        </span>
      </p>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 gap-y-16">
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
    </section>
  )
}

export default Advantages
