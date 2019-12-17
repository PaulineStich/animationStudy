import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, next, previous, n, p, slide }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        next={next}
        previous={previous}
      />
      <main>{children}</main>
      {slide && <Footer next={n} previous={p} />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  next: PropTypes.string,
  previous: PropTypes.string,
}

export default Layout
