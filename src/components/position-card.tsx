import React, { FC } from 'react'
import Chip from './chip'
import Share from '../assets/images/share.svg'
import ChevronRight from '../assets/images/chevron-right.svg'
import { Link } from 'gatsby'

export interface PositionCardProps {
  title: string
  tags: string[]
  url: string
}

const PositionCard: FC<PositionCardProps> = ({ title, tags, url }) => {
  return (
    <Link
      to={url}
      target={'_blank'}
      className="flex flex-row py-2 px-4 md:px-8 md:py-4 border border-gray-200 rounded-lg bg-white justify-between items-center drop-shadow-sm overflow-auto"
      rel="noreferrer"
    >
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
        <h6 className="font-bold text-gray-600 md:text-4xl">{title}</h6>
        <div className="flex flex-row gap-x-3 md:hidden mt-2">
          {tags.map((tag, index) => (
            <Chip text={tag} key={index} />
          ))}
        </div>
      </div>
      <div className="flex w-fit flex-row gap-x-6 items-center">
        <div className="hidden flex-row gap-x-3 md:flex">
          {tags.map((tag, index) => (
            <Chip text={tag} key={index} />
          ))}
        </div>
        <Share className={'text-gray-500 fill-current h-6 w-6 md:h-8 md:w-8'} />
        <ChevronRight
          className={'text-gray-500 fill-current h-6 w-6 md:h-8 md:w-8'}
        />
      </div>
    </Link>
  )
}

export default PositionCard
