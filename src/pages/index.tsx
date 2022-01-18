import React from 'react'
import OurTeam from '../containers/our-team/our-team'

interface IndexProps {
  data: any
}

const IndexPage = ({ data }: IndexProps) => (
  <div className="prose flex flex-col bg-gray-50 dark:bg-gray-900 h-full justify-between pt-16 md:pt-24">
    <main>
      <OurTeam />
    </main>
  </div>
)

export default IndexPage
