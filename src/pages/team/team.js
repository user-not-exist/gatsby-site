import React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

const team = () => {
  return (
    <Layout>
      <div>
        <h2>Team</h2>
        <span> description</span>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export default team
