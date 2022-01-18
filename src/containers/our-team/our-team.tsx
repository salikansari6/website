import React from 'react'
import Display from '../../components/display'
import PolaroidList from '../../components/polaroidList'

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

const OurTeam = () => {
  return (
    <section>
      <Display className="text-center font-bold my-6 text-gray-800">
        Our team is a mixed bag
      </Display>
      <div className="inline-flex">
        <div className="basis-1/12 md:basis-1/5" />
        <div className="basis-5/6 md:basis-3/5">
          <h4 className="text-center text-xl leading-lh4 md:text-2xl md:leading-lh3 lg:text-3xl lg:leading-lh6 text-gray-600">
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
      <PolaroidList polaroidData={data} />
    </section>
  )
}

export default OurTeam
