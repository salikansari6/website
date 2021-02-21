import React from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'
import KeyMembers from '../components/key-members'
import Section from '../components/section'

interface IndexProps {
  data: any
}

const IndexPage = ({ data }: IndexProps) => (
  <div className="flex flex-col bg-gray-50 h-full justify-between pt-16 md:pt-24">
    <main>
      <title>Procedure</title>
      <div className="container">
        <Header
          className="mb-10 md:md-16"
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <KeyMembers
          className="md:flex mb-10 md:mb-16"
          keyMembers={data.site.siteMetadata.keyMembers}
        />
        <Section
          className="mb-10 md:mb-16"
          title="Tech Stack"
          isGrid={true}
          subSections={data.site.siteMetadata.techStack}
        />
        <Section
          className="mb-10 md:md-16"
          title="Our approach to building Products"
          subSections={data.site.siteMetadata.productApproach}
        />
        <Section
          className="mb-10 md:md-16"
          title="Our approach to building Teams"
          subSections={data.site.siteMetadata.teamApproach}
        />
        <Section
          className="mb-10 md:mb-16"
          title="Expertise"
          isGrid={true}
          subSections={data.site.siteMetadata.expertise}
        />
        <Section
          className="mb-10 md:md-16"
          title="Engagement"
          subSections={data.site.siteMetadata.engagement}
        />
      </div>
    </main>
    <footer>
      <div className="container">
        <Footer />
      </div>
    </footer>
  </div>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        keyMembers {
          name
          title
          role
          url
        }
        techStack {
          title
          description
        }
        productApproach {
          title
          description
        }
        teamApproach {
          title
          description
        }
        expertise {
          title
          description
        }
        engagement {
          title
          description
        }
      }
    }
  }
`

export default IndexPage
