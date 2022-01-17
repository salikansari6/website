import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import KeyMembers from '../components/key-members'
import Section, { SectionProps } from '../components/section'

interface IndexProps {
  data: any
}

const IndexPage = ({ data }: IndexProps) => (
  <div className="prose flex flex-col bg-gray-50 dark:bg-gray-900 h-full justify-between pt-16 md:pt-24">
    <main>
      <title>Procedure Website</title>
      <h1>Procedure Website </h1>
    </main>
  </div>
)

export default IndexPage
