import React, { useState, useRef } from 'react'
import MainWrapper from '../components/main-wrapper'
import MaxWidthWrapper from '../components/max-width-wrapper'
import Display from '../components/display'
import Avatar from '../components/avatar'
import StepIndicator, { StepProps } from '../components/step-indicator'
import { calculateStepPosition } from '../utils/utils'
import { testimonials } from '../shared/sample-data'
import Particles from 'react-tsparticles'

import { confettiOptions } from '../shared/confettiConfig'

const Testimonial: React.FC = () => {
  const testimonialData: StepProps[] = testimonials[0].journey
  const ref = useRef<HTMLUListElement>(null)

  const MIDDLE = Math.floor((testimonials.length - 1) / 2)
  const MIDDLE_GAP = 5

  const [testimonialsUI, setTestimonialsUI] = useState(
    testimonials.map((person, index) => {
      return {
        ...person,
        positionX:
          index <= MIDDLE
            ? index * Math.floor(100 / testimonials.length)
            : index * Math.floor(100 / testimonials.length) + MIDDLE_GAP,
        customIdx: index
      }
    })
  )

  const moveAvatarsToLeft = (clickIdx: number) => {
    setTestimonialsUI(prev =>
      prev.map((t, index) => {
        return {
          ...t,
          positionX:
            index - (clickIdx - MIDDLE) >= 0
              ? prev[index - (clickIdx - MIDDLE)].positionX
              : prev[prev.length + (index - (clickIdx - MIDDLE))].positionX,
          customIdx:
            index - (clickIdx - MIDDLE) >= 0
              ? prev[index - (clickIdx - MIDDLE)].customIdx
              : prev[prev.length + (index - (clickIdx - MIDDLE))].customIdx
        }
      })
    )
  }

  const moveAvatarsToRight = (clickIdx: number) => {
    setTestimonialsUI(prev =>
      prev.map((t, index) => {
        const shiftIndex = (index + (MIDDLE - clickIdx)) % prev.length
        return {
          ...t,
          positionX: prev[shiftIndex].positionX,
          customIdx: prev[shiftIndex].customIdx
        }
      })
    )
  }

  const handleChange = (
    _: React.ChangeEvent<HTMLInputElement>,
    clickIdx: number
  ) => {
    if (clickIdx <= MIDDLE) {
      moveAvatarsToRight(clickIdx)
    } else {
      moveAvatarsToLeft(clickIdx)
    }
  }

  return (
    <MainWrapper className="relative overflow-hidden pb-20">
      <MaxWidthWrapper>
        <Display className="text-center font-bold pb-10 md:pb-20 text-gray-800">
          Our happy employees
        </Display>
        <MainWrapper className="mx-auto  w-9/12 h-48 overflow-hidden">
          <ul
            className="flex items-center h-full justify-center overflow-x-scroll scroll-smooth no-scrollbar py-10 flex-nowrap "
            ref={ref}
          >
            {testimonialsUI.map((testimonial, index) => {
              return (
                <li
                  key={index}
                  className={`transition-all duration-300 absolute flex`}
                  style={{ left: `${testimonial.positionX}%` }}
                >
                  <input
                    type="radio"
                    id={`avatar-${index}`}
                    name="avatar"
                    className="hidden"
                    onChange={event =>
                      handleChange(event, testimonial.customIdx)
                    }
                  />
                  <label htmlFor={`avatar-${index}`} className="cursor-pointer">
                    <Avatar
                      key={index}
                      src={testimonial?.image}
                      altText={index}
                      className="md:px-7 lg:px-9 xl:px-7"
                      checked={testimonial.customIdx === MIDDLE}
                    />
                  </label>
                  {testimonial.customIdx === MIDDLE && (
                    <div className="pl-0 lg:pl-4 xl:pl-6">
                      <p className="font-bold">{testimonial.name}</p>
                      <p>{testimonial.designation}</p>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </MainWrapper>
        <Particles
          id="tsparticles"
          className="absolute top-1/2 left-0 right-0 bottom-0 -z-10 bg-gradient-to-b from-transparent to-primary-100"
          options={confettiOptions as any}
        />
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
