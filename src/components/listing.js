import React from 'react'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby'

const SyledPost = styled.article`
  box-shadow: 0px 4px 10px #d8d8d8;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
  }

  .read-more {
  }
`

export const Listing = () => (
  <StaticQuery
    query={graphql`
      query Listing {
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD, YY")
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <div>
        {allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { slug, title, date },
              excerpt,
            },
          }) => (
            <SyledPost key={slug}>
              <h1>{title}</h1>
              <p>{excerpt}</p>
              <p>{date}</p>
              <Link to={`/posts${slug}`} className="read-more">
                {' '}
                read more
              </Link>
            </SyledPost>
          )
        )}
      </div>
    )}
  />
)
