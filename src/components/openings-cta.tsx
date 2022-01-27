import React, { FC } from 'react'
import Email from '../assets/images/email.svg'

interface OpeningCtaProps {
  className?: string
}

const OpeningsCTA: FC<OpeningCtaProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row align-middle rounded-lg bg-white justify-between items-start md:items-center drop-shadow-md border border-gray-300`}
    >
      <div className="mb-6 md:mb-0">
        <h1 className="font-bold text-gray-800 text-2xl md:text-6xl">
          Could’nt find your job role?
        </h1>
        <h5 className="font-normal text-gray-600  text-xl md:text-2xl ">
          Trust us, there&apos;s never a dull day at work.
        </h5>
      </div>
      <a
        href="mailto:hello@procedure.tech"
        className=" m-0 bg-primary-600 text-white rounded-xl p-3 md:p-4  flex flex-row items-center gap-2 md:gap-3"
      >
        <Email className="fill-current h-6 w-6 md:h-8 md:w-8" />
        <p className="font-bold font-inter md:text-xl text-body leading-lh4">
          Write to us
        </p>
      </a>
    </div>
  )
}

export default OpeningsCTA
