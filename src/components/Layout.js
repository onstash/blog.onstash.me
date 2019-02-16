import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        let header

        if (location.pathname === rootPath) {
            header = (
                <h1
                    style={{
                        ...scale(1.5),
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h1>
            )
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: `Merriweather Sans, sans-serif`,
                        marginTop: 0,
                        marginBottom: rhythm(-1),
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h3>
            )
        }
        return (
            <div
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
            >
                {header}
                {children}
                <footer
                    style={{
                        marginTop: rhythm(2.5),
                        paddingTop: rhythm(1),
                    }}
                >
                    <a
                        href="https://mobile.twitter.com/on_stash"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        twitter
                    </a>{' '}
                    &bull;{' '}
                    <a
                        href="https://github.com/onstash"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                </footer>
            </div>
        )
    }
}

export default Layout
