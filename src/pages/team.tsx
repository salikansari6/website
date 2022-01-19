import React from 'react'
import { graphql } from 'gatsby'

import Header from '../containers/header'
import OurTeam from '../containers/our-team'
import FeatureCard from '../components/feature-card'
import Monitor from '../assets/images/monitor.svg'

export interface TeamPageProps {
  data: any
}

const TeamPage = ({ data }: TeamPageProps) => (
  <div className="prose">
    <main>
      <title>Our Team</title>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <div className="py-20">
        <OurTeam />
      </div>
      <FeatureCard
        text="Get to learn, regardless of your experience, about Data Structure and Algorithms, LLD, HLD, DevOps, frontend, backend, and test engineering"
        icon={<Monitor />}
        title="Extensive boot camp"
      />
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
