import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Metadata from '../components/metadata';
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = get(this.props, 'data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Metadata title={siteTitle} description={siteDescription} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            category
            next
            previous
          }
        }
      }
    }
  }
`
