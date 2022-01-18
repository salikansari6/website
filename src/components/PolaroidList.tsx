import React, { FC } from 'react'
import Polaroid from './Polaroid'
import Scroller from './Scroller'
import { isEven } from '../utils/utils'

interface PolaroidData {
  imageSrc: string
  title: string
}

interface PolaroidListProps {
  polaroidData: PolaroidData[]
}

const PolaroidList: FC<PolaroidListProps> = ({ polaroidData }) => {
  const polaroidList = polaroidData.map((item, index) => {
    const rotation = isEven(index) ? 'rotate-6' : '-rotate-6'
    return (
      <Polaroid
        key={index}
        imageSrc={item.imageSrc}
        title={item.title}
        className={rotation}
      />
    )
  })

  return (
    <>
      <Scroller className="flex overflow-x-scroll scroll-smooth no-scrollbar py-16 md:py-24 flex-nowrap lg:pl-40 md:pl-20 pl-10">
        {polaroidList}
      </Scroller>
    </>
  )
}

export default PolaroidList
