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
      <title>{data.site.siteMetadata.title}</title>
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
          title={data.site.siteMetadata.techStack.title}
          isGrid={data.site.siteMetadata.techStack.isGrid}
          subSections={data.site.siteMetadata.techStack.subSections}
        />
        <Section
          className="mb-10 md:md-16"
          title={data.site.siteMetadata.productApproach.title}
          isGrid={data.site.siteMetadata.productApproach.isGrid}
          subSections={data.site.siteMetadata.productApproach.subSections}
        />
        <Section
          className="mb-10 md:md-16"
          title={data.site.siteMetadata.teamApproach.title}
          isGrid={data.site.siteMetadata.teamApproach.isGrid}
          subSections={data.site.siteMetadata.teamApproach.subSections}
        />
        <Section
          className="mb-10 md:mb-16"
          title={data.site.siteMetadata.expertise.title}
          isGrid={data.site.siteMetadata.expertise.isGrid}
          subSections={data.site.siteMetadata.expertise.subSections}
        />
        <Section
          className="mb-10 md:md-16"
          title={data.site.siteMetadata.engagement.title}
          isGrid={data.site.siteMetadata.engagement.isGrid}
          subSections={data.site.siteMetadata.engagement.subSections}
        />
      </div>
    </main>
    <footer>
      <div className="container">
        <Footer footer={data.site.siteMetadata.footer} />
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
          isGrid
          subSections {
            title
            description
          }
        }
        productApproach {
          title
          isGrid
          subSections {
            title
            description
          }
        }
        teamApproach {
          title
          isGrid
          subSections {
            title
            description
          }
        }
        expertise {
          title
          isGrid
          subSections {
            title
            description
          }
        }
        engagement {
          title
          isGrid
          subSections {
            title
            description
          }
        }
        footer
      }
    }
  }
`

export default IndexPage
