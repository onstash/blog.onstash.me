import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'

import Bio from '../components/Bio'
import Metadata from '../components/metadata';
import { rhythm, scale } from '../utils/typography'

const PreviousNextPostNavigation = ({ previous, next }) => {
    if (!previous && !next) {
        return null;
    }

    return (
        <div
            className="navigation"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px"
            }}
        >
            {
                previous ? (
                    <Link to={previous} style={{ boxShadow: "none" }}>
                        {"<-"} Read previous
                    </Link>
                ) : <div />
            }
            {
                next ? (
                    <Link to={next} style={{ boxShadow: "none" }}>
                        Read next ->
                    </Link>
                ) : null
            }
        </div>
    );
}

class BlogPostTemplate extends React.Component {
  render() {
    const {
        data: {
            markdownRemark: {
                frontmatter: {
                    title, description, date,
                    next, previous
                },
                html
            }
        }
    } = this.props;
    return (
      <div>
        <Metadata title={title} description={description} />
        <h1>{title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr
          style={{
            marginBottom: "15px"
          }}
        />
        <PreviousNextPostNavigation previous={previous} next={next} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        next
        previous
      }
    }
  }
`
