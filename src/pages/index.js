import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/scss/index.scss";

const IndexPage = () => {

  return (
    <>
      <Layout grid={false}>
        <SEO title="Home" />
        <div className="home">
          <div className="head"></div>
          <div className="description"></div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
