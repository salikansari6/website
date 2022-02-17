import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layout/default-layout'
import HeroSection from '../containers/hero-section'
import OurTeam from '../containers/our-team'
import Openings from '../containers/openings-section'
import Testimonial from '../containers/testimonial-section'
import PerksAndBenefits from '../containers/perks-and-benefits'
import Advantages from '../containers/advantages-section'
import FeatureSection from '../containers/feature-section'
import { openings, perks, advantages } from '../shared/sample-data'

export interface TeamPageProps {
  data: any
}

const TeamPage = ({ data }: TeamPageProps) => (
  <DefaultLayout menuLinks={data.site.siteMetadata.menuLinks}>
    <HeroSection />
    <OurTeam />
    <FeatureSection />
    <Testimonial />
    <Advantages advantages={advantages} />
    <PerksAndBenefits perks={perks} />
    <Openings openings={openings} />
  </DefaultLayout>
)

export default TeamPage

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`
