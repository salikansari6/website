import { StylesProps } from '../shared'

const heroSectionClass: StylesProps = {
  heroSectionWrapper:
    "bg-[url('../assets/backgrounds/team-hero.svg')] bg-no-repeat h-[853px] w-full bg-cover pt-5 sm:pt-24 xl:pt-0",
  heroSectionGrid:
    'grid xl:grid-flow-col grid-flow-row xl:grid-cols-2 xl:col-span-6 col-span-full gap-8 xl:gap-[7.5rem] xl:px-2 px-8 relative h-full w-full pt-16 sm:pt-10 xl:pt-0',
  leftGridItemContainer: 'm-auto',
  leftHeading:
    'text-info-900 font-bold text-4xl leading-lh7 md:text-display md:leading-lh9',
  leftHeadingSpan: 'block',
  leftSubHeading:
    'mt-3 md:mt-5 text-xl md:text-3xl font-normal md:leading-lh6 leading-lh4 text-gray-700',
  buttonContainer: 'mt-5 md:mt-8 flex justify-start',
  button:
    'font-inter bg-primary-600 flex items-center justify-center px-8 py-3 border border-transparent font-bold rounded-lg text-white sm:py-3 md:text-lg md:px-4 shadow-lg',
  buttonText: 'pl-2',
  rightGridItemContainer: 'm-auto',
  image: 'w-full h-full'
}

export default heroSectionClass
