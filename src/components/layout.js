import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, next, previous, n, p, slide, title}) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data.site.siteMetadata.title)
  console.log(title)

  return (
    <>
      <Header
        next={next}
        previous={previous}
        title={title}
        siteTitle={data.site.siteMetadata.title}
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
  title: PropTypes.string
}

export default Layout
