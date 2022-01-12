import React from 'react'

import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (
    <div className="container">
      <main>
        <title>Not found</title>
        <p>
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </div>
  )
}

export default NotFoundPage
