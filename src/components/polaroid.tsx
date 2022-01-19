import React from 'react'

interface PolaroidProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  title: string
  className?: string
}

const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  title,
  className,
  ...props
}) => {
  return (
    <div className="inline-block px-6" {...props}>
      <div
        className={`${className} relative bg-white flex flex-col space-y-4 w-[9.75rem] h-[10.6rem] md:w-[14.5rem] md:h-[16.4rem] items-center drop-shadow-md transition-all hover:-translate-y-1 hover:shadow-md after:content-[''] after:absolute after:transition-all after:w-full after:h-full after:duration-700 hover:after:scale-125 hover:after:scale-y-150 hover:after:opacity-0`}
      >
        <img
          src={imageSrc}
          alt={title}
          className="mx-auto w-[8.75rem] h-[7.5rem] md:w-[12.5rem] md:h-[12.5rem] pt-2 md:pt-4"
        />
        <h2 className="font-inkFree text-lg leading-7 text-center ">{title}</h2>
      </div>
    </div>
  )
}

export default Polaroid
