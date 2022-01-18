import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header'

export interface TeamPageProps {
  data: any
}

const TeamPage = ({ data }: TeamPageProps) => (
  <div className="prose">
    <main>
      <title>Our Team</title>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
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
