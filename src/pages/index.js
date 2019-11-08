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
          <section className="head"></section>
          <section className="description">
            <div className="container">
              <h1>Bringing digital interfaces to life with <br/> animation</h1>
              <div className="line" />
              <ul>
                <li><p>How to use animation to solve problems ? </p></li>
                <li><p>How to use animation for the power of good ?  </p></li>
                <li><p>How to find a place for animation in a design process ? </p></li>
                <li><p>How to animate responsibly ?  </p></li>
                <li><p>How to give more personality and bring digital interfaces to life with subtile animation ?  </p></li>
                <li><p>How to use interactive animation to tell a story ? </p></li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
