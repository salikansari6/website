import React, { FC } from 'react'
import Display from '../components/display'
import PolaroidList from '../components/polaroid-list'

const data = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    title: 'Office-Mumbai'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    title: 'Office-Mumbai'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    title: 'Office-Mumbai'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    title: 'Office-Mumbai'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    title: 'Office-Mumbai'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    title: 'Office-Mumbai'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
    title: 'Office-Mumbai'
  }
]

interface OurTeamProps {
  className?: string
}

const OurTeam: FC<OurTeamProps> = ({ className }) => {
  return (
    <section>
      <Display
        className={`${className} text-center font-bold my-6 text-gray-800`}
      >
        Our team is a mixed bag
      </Display>
      <div className="inline-flex">
        <div className="basis-1/12 md:basis-1/5" />
        <div className="basis-5/6 md:basis-3/5">
          <h4 className="text-center text-xl leading-lh4 md:text-2xl md:leading-lh5 lg:text-3xl lg:leading-lh6 text-gray-600">
            Of the smart and the hard-workers. Of the organised and slightly
            chaotic. Of the early risers and the burners of the midnight oil. We
            appreciate diversity and truly like having differing perspectives in
            the room. We pride ourselves on being early adopters of the latest
            tools, libraries, and frameworks while delivering business value all
            the time. We have fallen in love with our craft. and coffee.
          </h4>
        </div>
        <div className="basis-1/12 md:basis-1/5" />
      </div>
      <PolaroidList
        polaroidData={data}
        className="py-10 md:py-20 lg:pl-40 md:pl-20 pl-10"
      />
    </section>
  )
}

export default OurTeam