import React, { useState, useRef } from 'react'
import MainWrapper from '../components/main-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import Display from '../components/display'
import Avatar from '../components/avatar'
import StepIndicator, { StepProps } from '../components/step-indicator'
import { calculateStepPosition } from '../utils/utils'
import { testimonials } from '../shared/sample-data'

const Testimonial: React.FC = () => {
  const testimonialData: StepProps[] = testimonials[0].journey
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const ref = useRef<HTMLUListElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log(e, index)
    setSelectedIndex(index)
  }

  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <Display className="text-center font-bold pb-10 md:pb-20 text-gray-800">
          Our happy employees
        </Display>
        <MainWrapper className="mx-auto">
          <ul
            className="flex items-center justify-center overflow-x-scroll scroll-smooth no-scrollbar py-10 flex-nowrap "
            ref={ref}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <li key={index}>
                  <input
                    type="radio"
                    id={`avatar-${index}`}
                    name="avatar"
                    className="hidden"
                    onChange={event => handleChange(event, index)}
                  />
                  <label htmlFor={`avatar-${index}`} className="cursor-pointer">
                    <Avatar
                      key={index}
                      src={testimonial?.image}
                      altText={index}
                      className="pr-4 md:px-7 lg:px-9 xl:px-7"
                      checked={index === selectedIndex}
                    />
                  </label>
                </li>
              )
            })}
          </ul>
        </MainWrapper>
        <MainWrapper className="w-9/12 mx-auto">
          <MainWrapper className="rounded-xl bg-white shadow-card overflow-hidden">
            <h5 className="text-2xl leading-lh5 p-8">
              “Working at Procedure helped me ‘create’ a career for myself in
              product & technology. Maybe a story for aspiring product folks who
              currently have no clue how to get started. It’d be a completely
              different story if it were not for the support and the number of
              chances I got.”
            </h5>
            <MainWrapper className="pt-10 pb-20 translate-x-[-0.2rem]">
              <StepIndicator
                stepPositions={calculateStepPosition(testimonialData.length)}
                journey={testimonialData}
              />
            </MainWrapper>
          </MainWrapper>
        </MainWrapper>
      </MaxWidthWrapper>
    </MainWrapper>
  )
}

export default Testimonial
