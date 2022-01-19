import React from 'react'
import { graphql } from 'gatsby'
import Header from '../containers/header'
import HeroSection from '../containers/Team/hero-section'
import OurTeam from '../containers/Team/our-team'
import Openings from '../containers/openings'
import PerksAndBenefits from '../containers/perks-and-benefits'
import { openings, perks } from '../shared/sample-data'

export interface TeamPageProps {
  data: any
}

const TeamPage = ({ data }: TeamPageProps) => (
  <div className="prose">
    <main>
      <title>Our Team</title>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <HeroSection />
      <div className="py-20">
        <OurTeam />
        <PerksAndBenefits perks={perks} />
        <Openings openings={openings} />
      </div>
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
