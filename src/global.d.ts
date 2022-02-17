declare module 'react-step-progress-bar' {
  import React from 'react'

  interface ProgressBarProps {
    percent: number
    stepPositions?: number[] | undefined
    unfilledBackground?: string
    filledBackground?: string
    width?: number | string
    height?: number
    hasStepZero?: boolean
    text?: string
    className?: string
  }
  interface StepProps {
    position?: number
    children: (props: {
      accomplished: boolean
      transitionState: string
      index: number
      position: number
    }) => React.ReactNode
    transition?: 'scale' | 'rotate' | 'skew'
    transitionDuration?: number
  }
  class ProgressBar extends React.Component<ProgressBarProps, unknown> {}
  class Step extends React.Component<StepProps, unknown> {}
}
