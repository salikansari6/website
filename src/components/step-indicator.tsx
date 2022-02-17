import React from 'react'
import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'

interface StepIndicatorProps {
  stepPositions: number[] | undefined
  journey: StepProps[]
}

export interface StepProps {
  year: number | string
  content: string
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  stepPositions,
  journey
}) => {
  return (
    <ProgressBar
      percent={100}
      filledBackground="#DCD0FF"
      width="85%"
      stepPositions={stepPositions}
    >
      {journey &&
        journey.map((step: StepProps, index: number) => (
          <Step key={index}>
            {() => (
              <>
                <div>
                  <div
                    className={`w-5 h-5 rounded-full relative ${
                      index === journey.length - 1
                        ? 'bg-primary-600 border-4 border-primary-200 scale-150'
                        : 'bg-primary-400'
                    }
                  `}
                  ></div>
                  <div
                    className={`absolute top-[-2rem] left-[-.5rem] text-center`}
                  >
                    {step.year}
                  </div>
                  <div
                    className={`absolute top-10 left-[-3.5rem] w-[8rem] text-center`}
                  >
                    {step.content}
                  </div>
                </div>
              </>
            )}
          </Step>
        ))}
    </ProgressBar>
  )
}

export default StepIndicator
