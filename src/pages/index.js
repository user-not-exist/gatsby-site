import React from 'react'
import { Link } from 'gatsby'
import { Listing } from '../components/listing'
import Layout from '../components/layout'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>All posts</h1>
    <Listing />
  </Layout>
)

export default IndexPage
