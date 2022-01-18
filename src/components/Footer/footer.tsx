import React from 'react'
import { Logo } from '../../images/index'

const Footer = () => {
  return (
    <div className="bg-info-900 text-info-50">
      <div className="container flex flex-col items-center gap-4 py-10">
        <Logo height="32" width="130" />
        <div className="flex gap-8 md:gap-12 justify-center items-center mt-10">
          <div className="cursor-pointer hover:opacity-80">Link1</div>
          <div className="cursor-pointer hover:opacity-80">Link2</div>
          <div className="cursor-pointer hover:opacity-80">Link3</div>
          <div className="cursor-pointer hover:opacity-80">Link4</div>
        </div>
        <div className="flex gap-4 justify-center items-center mt-10">
          <div className="bg-white w-6 h-6 rounded-full"></div>
          <div className="bg-white w-6 h-6 rounded-full"></div>
          <div className="bg-white w-6 h-6 rounded-full"></div>
          <div className="bg-white w-6 h-6 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
