import React, { FC } from 'react'
import { ClassNameProps } from '../shared'
import MainWrapper from './main-wrapper'

interface AvatarProps {
  className?: ClassNameProps
  avatarStyle?: ClassNameProps
  altText?: number
  src?: string
  checked?: boolean
}

const Avatar: FC<AvatarProps> = ({
  className,
  avatarStyle,
  altText,
  src,
  checked
}) => {
  return (
    <MainWrapper className={className}>
      <div
        className={`${avatarStyle} ${
          checked && 'testimonial-shadow scale-110'
        } w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 overflow-hidden transition-all duration-200 ease-in-out rounded-full`}
      >
        <img
          className={`object-cover h-full w-full rounded-full`}
          src={src}
          alt={`Testimonial-Avatar-${altText}`}
        />
      </div>
    </MainWrapper>
  )
}

export default Avatar
