import React from 'react'
import Avatar from '../components/avatar'

interface IndexProps {
  data: any
}

const IndexPage = ({ data }: IndexProps) => (
  <div className="prose">
    <main>
      <h1>Procedure Website</h1>
      <Avatar />
    </main>
  </div>
)

export default IndexPage
