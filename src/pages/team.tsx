import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layout/default-layout'
import HeroSection from '../containers/hero-section'
import OurTeam from '../containers/our-team'
import Openings from '../containers/openings'
import Testimonial from '../components/testimonial'
import PerksAndBenefits from '../containers/perks-and-benefits'
import Advantages from '../containers/advantages'
import FeatureSection from '../containers/feature-section'
import { openings, perks, advantages } from '../shared/sample-data'

export interface TeamPageProps {
  data: any
}

const TeamPage = ({ data }: TeamPageProps) => (
  <div className="prose">
    <main>
      <title>Our Team</title>
      <DefaultLayout menuLinks={data.site.siteMetadata.menuLinks}>
        <HeroSection />
        <OurTeam />
        <FeatureSection className="md:px-28 px-8" rootClass="md:py-28 py-12" />
        <Advantages advantages={advantages} />
        <PerksAndBenefits perks={perks} />
        <Testimonial />
        <Openings openings={openings} />
      </DefaultLayout>
    </main>
  </div>
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
