import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___slug] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
export const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        {allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <span>{edge.node.frontmatter.title}</span>{' '}
            <Link to={`/posts${edge.node.frontmatter.slug}`}>Link</Link>
          </li>
        ))}
      </>
    )}
  />
)

Archive.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Archive
