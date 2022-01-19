import React from 'react'
import { graphql } from 'gatsby'

import Header from '../containers/header'
import OurTeam from '../containers/our-team'
import Footer from '../containers/footer'

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
