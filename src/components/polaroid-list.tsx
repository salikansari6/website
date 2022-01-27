import React, { FC } from 'react'
import Polaroid from './polaroid'
import Scroller from './scroller'
import { isEven } from '../utils/utils'

interface PolaroidData {
  imageSrc: string
  title: string
}

interface PolaroidListProps {
  polaroidData: PolaroidData[]
  className?: string
}

const PolaroidList: FC<PolaroidListProps> = ({ polaroidData, className }) => {
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
      <Scroller
        className={`${className} flex overflow-x-scroll scroll-smooth no-scrollbar flex-nowrap`}
      >
        {polaroidList}
      </Scroller>
    </>
  )
}

export default PolaroidList
