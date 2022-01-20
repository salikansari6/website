import React from 'react'
import { graphql } from 'gatsby'
import Header from '../containers/header'
import HeroSection from '../containers/hero-section'
import OurTeam from '../containers/our-team'
import Openings from '../containers/openings'
import PerksAndBenefits from '../containers/perks-and-benefits'
import Footer from '../containers/footer'
import FeatureSection from '../containers/feature-section'
import { openings, perks } from '../shared/sample-data'

export interface TeamPageProps {
  data: any
}

const TeamPage = ({ data }: TeamPageProps) => (
  <div className="prose">
    <main>
      <title>Our Team</title>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <div className="py-20">
        <HeroSection />
        <OurTeam className="md:py-20" />
        <FeatureSection className="md:px-28 px-8" />
        <PerksAndBenefits perks={perks} />
        <Openings openings={openings} />
      </div>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
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
