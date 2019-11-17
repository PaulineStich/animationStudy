import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Arrow from "../../static/svg/mdi_arrow_right_alt.svg"

import "../utils/scss/index.scss";

const ReadTheFirstArticle = () => {
  return (
    <Link to="/" className="first-article">
      <h5>Get started</h5>
      <p>Read the first article</p>
      <Arrow/>
    </Link>
  )
}

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="home">
          <section className="head">
            <ReadTheFirstArticle />  
          </section>
          <section className="description">
            <div className="container">
              <h4>Bringing digital interfaces to life with <br/> animation</h4>
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
