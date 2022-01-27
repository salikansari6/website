import React, { FC } from 'react'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  imageURL: string
  active: boolean
  name: string
  title: string
  onClick: () => void
}

const Avatar: FC<AvatarProps> = ({ onClick, ...restProps }) => {
  return (
    <div className="flex gap-[5px] sm:gap-[16px] items-center rounded-full">
      {restProps.active ? (
        <img
          className="object-cover rounded-full h-[45px] w-[45px] md:h-[80px] md:w-[80px] lg:h-[110px] lg:w-[110px] border-2 sm:border-4 border-indigo-600"
          src={restProps.imageURL}
          alt=""
        />
      ) : (
        <div
          onClick={onClick}
          className="h-[32px] w-[32px] md:h-[60px] md:w-[60px]  lg:h-[80px] lg:w-[80px] rounded-full "
        >
          <img
            className="object-cover h-full w-full rounded-full"
            src={restProps.imageURL}
            alt=""
          />
        </div>
      )}
      {restProps.active && (
        <div>
          <h1 className="text-[10px] sm:text-xl lg:text-[24px] font-inter font-bold">
            {restProps.name}
          </h1>
          <h1 className="text-[10px] sm:text-xl lg:text-[24px] font-inter">
            {restProps.title}
          </h1>
        </div>
      )}
    </div>
  )
}

export default Avatar
