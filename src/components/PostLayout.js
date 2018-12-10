import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Archive } from './Archive'
import Layout from './layout'

// Static Query used anywhere,doesn't accept variables, can't use context
// PAges Query must be used on pages

export default class PostLayout extends Component {
  render() {
    const {
      data: { markdownRemark },
      location,
    } = this.props
    console.log(markdownRemark, 'markdownRemark')
    return (
      <Layout location={location}>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Archive />
        <div />
        <p />
        <span />
      </Layout>
    )
  }
}

export const query = graphql`
  query Postlayout($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`
