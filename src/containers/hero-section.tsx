import { Link } from 'gatsby'
import React from 'react'
import RocketIcon from '../assets/images/rocket-icon.svg'

const HeroSection = () => {
  return (
    <div className="bg-team-hero-pattern bg-center bg-no-repeat mb-32 pb-40">
      <div className="max-w-7xl mx-auto">
        <div className="pb-8 sm:pb-16 lg:pb-28 xl:pb-32 md:pb-8 lg:max-w-2xl lg:w-full">
          <main className="pt-24 px-6 lg:px-8 lg:pt-64 sm:pt-32">
            <div className="text-left">
              <h3 className="text-info-900 font-bold sm:text-display sm:leading-lh9">
                <span className="block">Our Approach to</span>
                <span className="block">Building Teams</span>
              </h3>
              <h4 className="mt-3 text-xl sm:text-3xl font-normal sm:leading-lh6 leading-lh4 text-gray-700 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
                We build small and performant teams while continuing to play
                with new stacks without little or heads up.
              </h4>
              <div className="mt-5 sm:mt-8 flex justify-start">
                <Link
                  to="/"
                  className="font-inter bg-primary-600 flex items-center justify-center px-8 py-3 border 
                                border-transparent font-bold rounded-lg text-white sm:py-3 md:text-lg md:px-4 shadow-lg"
                >
                  <RocketIcon /> <span className="pl-2">Open Positions</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:pt-28 md:pt-0">
        <img src="/images/building-team.svg" />
      </div>
    </div>
  )
}

export default HeroSection
