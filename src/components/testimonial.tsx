import React, { useState } from 'react'
import Avatar from './avatar'
import Dot from '../assets/images/dot.svg'
import { testimonials } from '../shared/sample-data'

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonials.length / 2)
  )
  const [testimonialArray, setTestimonialArray] = useState(testimonials)

  const handleActive = (index: number) => {
    const array = [...testimonialArray]
    const temp = array[index]
    array[index] = array[activeIndex]
    array[activeIndex] = temp
    setTestimonialArray(array)
  }

  return (
    <div className=" pb-12  ">
      <div className="container flex flex-col items-center gap-5 relative">
        <h1 className="font-bold text-center text-xl sm:text-4xl lg:text-[44px] py-[32px] md:py-[72px]">
          Our happy employees
        </h1>

        <div className="flex w-full px-4 justify-center items-center relative pb-[16px] sm:pb-[32px]">
          <div className=" flex w-full items-center justify-center gap-[16px] md:gap-[42px] ">
            {testimonialArray.map((testimonial, index) => (
              <Avatar
                key={testimonial.name}
                name={testimonial.name}
                active={index === activeIndex}
                title={testimonial.title}
                imageURL={testimonial.url}
                onClick={() => handleActive(index)}
              />
            ))}
          </div>
        </div>

        <div className=" mx-4 py-4 sm:w-3/4 shadow-xl rounded-2xl relative">
          <div className="md:py-[32px] px-4 sm:px-8 ">
            {testimonialArray[activeIndex].testimonial}
          </div>

          <div className="flex gap-4 justify-between text-center px-4 sm:px-8 text-xs md:text-sm md:text-[14px] lg:text-[20px] py-2 sm:leading-relaxed">
            <div className="w-1/2">
              {testimonialArray[activeIndex].startYear}
            </div>
            <div className="w-1/2">Today</div>
          </div>
          <div className="flex  mr-4 relative ">
            <div className=" h-[5px] w-3/4  lg:gap-8 flex items-center bg-primary-200 my-2">
              <Dot className="w-3/4 h-[14px]  lg:h-[20px]" />
              <div className="flex justify-end w-1/4">
                <Dot className="h-[14px] lg:h-[20px] -mr-[7px] lg:-mr-[10px] " />
              </div>
            </div>

            <div className="w-1/4 h-[5px]"></div>
          </div>

          <div className="flex justify-between text-center px-4 sm:px-8 text-xs md:text-[14px] lg:text-[20px] py-4 sm:leading-relaxed">
            <div className="w-1/2">
              {testimonialArray[activeIndex].prevDesignation}
            </div>
            <div className="flex-1">
              {testimonialArray[activeIndex].currDesignation}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial
