import React from 'react'
import { graphql } from 'gatsby'
import Header from '../containers/header'
import HeroSection from '../containers/hero-section'
import OurTeam from '../containers/our-team'
import Openings from '../containers/openings'
import Testimonial from '../components/testimonial'
import PerksAndBenefits from '../containers/perks-and-benefits'
import Advantages from '../containers/advantages'
import Footer from '../containers/footer'
import { openings, perks, advantages } from '../shared/sample-data'

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
        <Advantages advantages={advantages} />
        <PerksAndBenefits perks={perks} />
        <Testimonial />
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
